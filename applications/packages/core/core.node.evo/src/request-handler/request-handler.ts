import { isWraithlightError } from "@wraithlight/core.errors";
import { Guid, newGuid } from "@wraithlight/core.guid";
import { HttpCode, HttpVerb } from "@wraithlight/core.http";
import { HeaderName } from "@wraithlight/domain.http.constants";
import { IHttpResponse } from "@wraithlight/domain.http.types";
import { Timer } from "@wraithlight/framework.timer";
import { cast } from "@wraithlight/framework.type-utils";
import { Application, IRouterMatcher, Request, Response } from "express";

import { BaseController, isBaseControllerResult } from "../base";
import { addEndpoint } from "../devkit";
import { EventBus } from "../events";
import { Injector } from "../injector";

import { isBot } from "./is-bot";
import {
  CORE_CONTROLLER_FATAL_CODE,
  CORE_CONTROLLER_FATAL_MESSAGE,
  CORE_METHOD_FATAL_CODE,
  CORE_METHOD_FATAL_MESSAGE,
  PARAM_FATAL_CODE,
  PARAM_FATAL_MESSAGE
} from "./request-handler.const";
import {
  HandleControllerModel,
  HandlerControllerEndpointFilterModel
} from "./request-handler.model";

export class RequestHandler {

  private static readonly controllers: Array<HandleControllerModel> = [];

  public static addBluepirnt(
    context: HandleControllerModel
  ): void {
    this.controllers.push(context);
  }

  public static defineBlueprints(
    application: Application
  ): void {
    for (const controller of this.controllers) {
      for (const endpoint of controller.endpoints) {
        const handler = this.getHandler(application, endpoint.verb);
        addEndpoint(endpoint.verb, endpoint.fullPath);

        handler(endpoint.fullPath, async (
          req: Request,
          res: Response
        ) => {
          const correlation = newGuid();
          req.headers[HeaderName.CorrelationId] = correlation;
          req.headers[HeaderName.IsBot] = isBot(req.headers["user-agent"]).toString();

          const timer = new Timer();
          timer.start();
          EventBus.emitRequestStart(correlation);
          const filterResult = await this.processFilters(
            correlation,
            endpoint.filters,
            req
          );

          if (filterResult) {
            const end = timer.stop();
            EventBus.emitRequestEnd(
              correlation,
              end
            );
            this.processErrorResponse(
              res,
              correlation,
              filterResult.errorCode,
              filterResult.message
            );
            return;
          }

          let params: Array<unknown> = [];
          try {
            params = endpoint.params
              .sort((l, r) => l.propertyIndex > r.propertyIndex ? 1 : -1)
              .map(m => m.extractorFn(req))
              ;
          } catch {
            EventBus.emitParamFatal(correlation);
            const end = timer.stop();
            EventBus.emitRequestEnd(
              correlation,
              end
            );
            this.processErrorResponse(
              res,
              correlation,
              PARAM_FATAL_CODE,
              PARAM_FATAL_MESSAGE
            );
            return;
          }

          let controllerInstance: BaseController;
          try {
            controllerInstance = Injector.getInstance<BaseController>(
              controller.injectionToken
            );
          } catch {
            EventBus.emitOnCoreControllerFatal(
              correlation,
              controller.injectionToken
            );
            const end = timer.stop();
            EventBus.emitRequestEnd(
              correlation,
              end
            );
            this.processErrorResponse(
              res,
              correlation,
              CORE_CONTROLLER_FATAL_CODE,
              CORE_CONTROLLER_FATAL_MESSAGE
            );
            return;
          }

          let method: (...args: Array<unknown>) => unknown;
          try {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
            method = cast<any>(controllerInstance)[endpoint.methodName];
          } catch {
            EventBus.emitOnCoreMethodFatal(
              correlation,
              controller.injectionToken,
              endpoint.methodName
            );
            const end = timer.stop();
            EventBus.emitRequestEnd(
              correlation,
              end
            );
            this.processErrorResponse(
              res,
              correlation,
              CORE_METHOD_FATAL_CODE,
              CORE_METHOD_FATAL_MESSAGE
            );
            return;
          }

          try {
            const methodResult = await method.apply(controllerInstance, params);

            if (isBaseControllerResult(methodResult)) {
              this.processSuccessResponse(
                res,
                correlation,
                methodResult.code,
                methodResult.payload
              );
            } else {
              this.processSuccessResponse(
                res,
                correlation,
                HttpCode.Ok,
                methodResult
              );
            }
            const end = timer.stop();
            EventBus.emitRequestEnd(
              correlation,
              end
            );
          } catch (e: any) {
            const end = timer.stop();
            EventBus.emitRequestFatal(
              correlation
            );
            EventBus.emitRequestEnd(
              correlation,
              end
            );
            if (isWraithlightError(e)) {
              this.processErrorResponse(
                res,
                correlation,
                e.statusCode,
                e.statusMessage
              );
            } else {
              this.processErrorResponse(
                res,
                correlation,
                HttpCode.InternalError,
                "E_METHOD"
              );
            }
          }
        });
      }
    }
    EventBus.emitBindingsDone();
  }

  private static async processFilters(
    correlation: Guid,
    filters: Array<HandlerControllerEndpointFilterModel>,
    req: Request
  ): Promise<{ errorCode: HttpCode, message: string } | undefined> {
    for (const filter of filters) {
      try {
        const result = await filter.guardFn(req);
        if (result.isError) {
          EventBus.emitFilterFail(
            correlation,
            result.errorMessage,
            result.errorHttpCode,
          );
          return {
            errorCode: result.errorHttpCode,
            message: result.errorMessage
          };
        }
      } catch {
        EventBus.emitFilterFatal(
          correlation
        );
        return {
          errorCode: HttpCode.InternalError,
          message: "E_FILTER"
        };
      }
    }
  }

  private static processErrorResponse(
    res: Response,
    correlationId: Guid,
    errorCode: HttpCode,
    error: string
  ): void {
    const response: IHttpResponse<undefined> = {
      correlationId: correlationId,
      payload: undefined,
      error: {
        code: error
      }
    };

    this.processResponse(
      res,
      errorCode,
      response
    );
  }

  private static processSuccessResponse<T>(
    res: Response,
    correlationId: Guid,
    statusCode: HttpCode,
    payload: T
  ): void {
    const response: IHttpResponse<T> = {
      correlationId: correlationId,
      payload: payload,
      error: {
        code: ""
      }
    };

    this.processResponse(
      res,
      statusCode,
      response
    );
  }

  private static processResponse<T>(
    res: Response,
    code: HttpCode,
    response: IHttpResponse<T>
  ): void {
    res.status(code).send(response);
  }

  private static getHandler(
    application: Application,
    verb: HttpVerb
  ): IRouterMatcher<Application>  {
    switch (verb) {
      case HttpVerb.GET: return application.get.bind(application);
      case HttpVerb.DELETE: return application.delete.bind(application);
      case HttpVerb.PUT: return application.put.bind(application);
      case HttpVerb.POST: return application.post.bind(application);
      case HttpVerb.PATCH: return application.patch.bind(application);
    }
  }

}
