import { Application, Request, Response } from "express";
import { HttpCode, HttpVerb } from "@wraithlight/core.http";
import { Guid, newGuid } from "@wraithlight/core.guid";
import { Timer } from "@wraithlight/framework.timer";
import { HeaderName } from "@wraithlight/domain.http.constants";

import { isBaseControllerResult } from "../base";
import { Injector } from "../injector";

import {
  HandleControllerModel,
  HandlerControllerEndpointFilterModel
} from "./request-handler.model";
import { EventBus } from "../events";
import { isBot } from "./is-bot";

// TODO: Wire in `EventBus`
// TODO: Wire in filters properly
export class RequestHandler {

  private static controllers: Array<HandleControllerModel> = [];

  public static addBluepirnt(
    context: HandleControllerModel
  ): void {
    this.controllers.push(context);
  }

  public static defineBlueprints(
    application: Application
  ): void {
    for(const controller of this.controllers) {
      for(const endpoint of controller.endpoints) {
        const handler = this.getHandler(application, endpoint.verb);

        handler(endpoint.fullPath, async (
          req: Request,
          res: Response
        ) => {
          const correlation = newGuid();
          req.headers[HeaderName.CorrelationId] = correlation;
          req.headers[HeaderName.IsBot] = isBot(req.headers["user-agent"]).toString()

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
            )
            this.processErrorResponse(
              res,
              correlation,
              filterResult.errorCode,
              filterResult.message
            );
            return;
          }

          const params = endpoint.params
            .sort((l, r) => l.propertyIndex > r.propertyIndex ? 1 : -1)
            .map(m => m.extractorFn(req))
          ;

          const controllerInstance = Injector.getInstance<any>(controller.injectionToken);
          const method = controllerInstance[endpoint.methodName];

          try {
            const methodResult = await method(...params);

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

          } catch {
            // TODO: Error handling here.
            this.processErrorResponse(
              res,
              correlation,
              HttpCode.InternalError,
              "E_METHOD"
            )
          }
        });
      }
    }
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
          }
        }
      } catch {
        EventBus.emitFilterFatal(
          correlation
        );
        return {
          errorCode: HttpCode.InternalError,
          message: "E_FILTER"
        }
      }
    }
  }

  private static processErrorResponse(
    res: Response,
    correlationId: Guid,
    errorCode: HttpCode,
    error: string
  ): void {
    const response = {
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
    const response = {
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
    response: T
  ): void {
    res.status(code).send(response);
  }

  private static getHandler(
    application: Application,
    verb: HttpVerb
  ) {
    switch(verb) {
      case HttpVerb.GET: return application.get.bind(application);
      case HttpVerb.DELETE: return application.delete.bind(application);
      case HttpVerb.PUT: return application.put.bind(application);
      case HttpVerb.POST: return application.post.bind(application);
      case HttpVerb.PATCH: return application.patch.bind(application);
    }
  }

}
