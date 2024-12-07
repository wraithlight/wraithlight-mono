import { Counter } from "@wraithlight/core.counter";
import { HttpVerb } from "@wraithlight/core.http";
import { Creatable } from "@wraithlight/framework.creatable";
import { Request } from "express";

import { BaseController } from "../base";
import { InjectionScope } from "../enum";
import { Injector } from "../injector";
import { FilterResult } from "../model";
import {
  HandleControllerModel,
  HandlerControllerEndpointModel,
} from "../request-handler";

import {
  COUNTER_NAME,
  DEFAULT_COUNTER_STATE,
  DEFAULT_STATE,
  INJECTION_PREFIX
} from "./handler-context.const";
import { HandlerContextModel } from "./handler-context.model";

export class HandlerContext {

  private static state: HandlerContextModel = DEFAULT_STATE;
  private static readonly counter = Counter.getInstance(
    COUNTER_NAME,
    DEFAULT_COUNTER_STATE
  );

  public static addParameter(
    methodName: string,
    propertyIndex: number,
    extractor: <T>(req: Request) => T
  ): void {
    this.state.params.push({
      methodName: methodName,
      propertyIndex: propertyIndex,
      extractorFn: extractor
    });
  }

  public static addFilter(
    methodName: string,
    filter: (req: Request) => Promise<FilterResult> | FilterResult
  ): void {
    this.state.filters.push({
      methodName: methodName,
      guardFn: filter
    });
  }

  public static addMethod(
    methodName: string,
    path: string,
    verb: HttpVerb
  ): void {
    this.state.methods.push({
      methodName: methodName,
      path: path,
      verb: verb
    });
  }

  public static addClass<TController extends Creatable<BaseController>>(
    basePath: string,
    injectionScope: InjectionScope,
    proto: TController
  ): void {
    const injectionToken = `${INJECTION_PREFIX}${this.counter.getNext()}`;
    this.state.class.basePath = basePath;
    this.state.class.injectionToken = injectionToken;
    injectionScope === InjectionScope.Multiton
      ? Injector.registerMultiton(injectionToken, () => new proto())
      : Injector.registerSingleton(injectionToken, () => new proto())
    ;
  }

  public static reset(): void {
    this.state = DEFAULT_STATE;
  }

  public static compile(): HandleControllerModel {
    const endpoints: Array<HandlerControllerEndpointModel> = [];
    for (const method of this.state.methods) {
      const endpoint: HandlerControllerEndpointModel = {
        verb: method.verb,
        methodName: method.methodName,
        fullPath: `${this.state.class.basePath}${method.path}`,
        // eslint-disable-next-line max-len
        params: this.state.params.filter(m => m.methodName === method.methodName),
        // eslint-disable-next-line max-len
        filters: this.state.filters.filter(m => m.methodName === method.methodName),
      };
      endpoints.push(endpoint);
    }
    return {
      injectionToken: this.state.class.injectionToken,
      endpoints: endpoints
    };
  }
}
