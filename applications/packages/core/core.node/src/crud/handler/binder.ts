import { HttpCode } from "@wraithlight/core.http";
import { isNil } from "@wraithlight/framework.nullable";
import { T_ANY } from "@wraithlight/kernel.any";
import {
  Application,
  IRouterMatcher,
  Request,
  Response
} from "express";

import { BaseController } from "../controller";
import { PARAM_PROPERTY_KEY } from "../decorator";
import {
  CONTROLLER_METADATA_KEY,
  ControllerMetadata,
  FILTER_METADATA_KEY,
  Invoker,
  MethodMetadata
} from "../internal";

import { requestIdFilter } from "./binder.utils";

export class ControllerBinder {

  public static bindControllers(
    app: Application,
    controllers: ReadonlyArray<BaseController>
  ): void {
    for (const controller of controllers) {
      this.bindController(
        app,
        controller
      );
    }
  }

  private static bindController(
    app: Application,
    controller: BaseController
  ): void {
    const metadata = this.getControllerMetadata(controller);
    for (const methodMetadata of metadata.methods) {
      const handler = this.getAppMethod(
        app,
        methodMetadata
      );
      const path = this.getMethodPath(
        metadata,
        methodMetadata
      );
      const method = this.getMethod(
        controller,
        methodMetadata
      );
      handler(
        path,
        async (req: Request, res: Response) => {
          const filters = this.getFilters(
            controller,
            methodMetadata.name
          );
          for (const invoker of filters) {
            const result = await invoker(req);
            if (!result.success) {
              const statusCode = result.errorHttpCode
                ? result.errorHttpCode
                : HttpCode.InternalError
                ;
              res.status(statusCode);
              res.send();
              return;
            }
          }
          if (this.isLegacy(controller, methodMetadata.name)) {
            const params = this.getParams(req);
            controller.setResponseContext(res);
            method.apply(
              controller,
              [...params]
            );
          } else {
            // eslint-disable-next-line max-len
            const executor = controller[PARAM_PROPERTY_KEY]?.[methodMetadata.name].contextExecutor;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const context = executor ? executor(req) : {};
            // eslint-disable-next-line max-len, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
            const paramExecutors = context[PARAM_PROPERTY_KEY]?.[methodMetadata.name].parameters;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
            const params = paramExecutors.map((m: T_ANY) => m(context));
            method.apply(context, params);
          }
        }
      );
    }
  }

  private static isLegacy(
    controller: BaseController,
    methodName: string
  ): boolean {
    return isNil(controller[PARAM_PROPERTY_KEY]?.[methodName]);
  }

  private static getFilters(
    controller: BaseController,
    methodName: string
  ): ReadonlyArray<Invoker> {

    if (!controller[FILTER_METADATA_KEY]) {
      return [requestIdFilter];
    }

    if (!controller[FILTER_METADATA_KEY][methodName]) {
      return [requestIdFilter];
    }

    const filters = controller[FILTER_METADATA_KEY][methodName];
    return [requestIdFilter, ...filters];
  }

  private static getMethod(
    controller: BaseController,
    methodMetadata: MethodMetadata
  ): ((...args: Array<unknown>) => void) {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return controller[methodMetadata.name] as (() => void);
  }

  private static getParams(
    req: Request
  ): Array<unknown> {
    const result = [];
    const body = this.getBodyParams(req);
    if (body && Object.keys(body).length > 0) {
      result.push(body);
    }
    const query = this.getRequestQueryParams(req);
    if (query && Object.keys(query).length > 0) {
      result.push(...Object.values(query));
    }
    const path = this.getRequestPathParams(req);
    if (path && Object.keys(path).length > 0) {
      result.push(...Object.values(path));
    }
    return result;
  }

  private static getBodyParams(
    req: Request
  ): object {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return this.getParamsFromRequest(
      req,
      "body"
    ) as object;
  }

  private static getRequestQueryParams(
    req: Request
  ): object {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return this.getParamsFromRequest(
      req,
      "query"
    ) as object;
  }

  private static getRequestPathParams(
    req: Request
  ): object {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return this.getParamsFromRequest(
      req,
      "params"
    ) as object;
  }

  private static getParamsFromRequest(
    req: Request,
    container: "body" | "query" | "params"
  ): unknown {
    return req[container];
  }

  private static getMethodPath(
    metadata: ControllerMetadata,
    method: MethodMetadata
  ): string {
    return `${metadata.baseUrl}${method.path}`;
  }

  private static getAppMethod(
    app: Application,
    methodMetadata: MethodMetadata
  ): IRouterMatcher<Application> {
    switch (methodMetadata.type) {
      case "GET": return app.get.bind(app);
      case "POST": return app.post.bind(app);
      default: throw `No HTTP method was found for type: '${methodMetadata.type}'!`;
    }
  }

  private static getControllerMetadata(
    controller: BaseController
  ): ControllerMetadata {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return controller[CONTROLLER_METADATA_KEY] as ControllerMetadata;
  }
}
