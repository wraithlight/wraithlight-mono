import { IArgumentDecoratorFactory } from "@wraithlight/core.decorator.types";
import { Predicate } from "@wraithlight/core.linq";
import { isNil } from "@wraithlight/framework.nullable";
import { T_ANY } from "@wraithlight/kernel.any";
import { Request } from "express";

import { BaseController } from "../../controller";

import { PARAM_PROPERTY_KEY } from "./param.const";

export const ParamDecorator = <T extends BaseController>(
  contextExecutor: Predicate<Request, T_ANY>,
  parameterName?: string
): IArgumentDecoratorFactory<T> => (
    target: T,
    propertyKey: string,
    parameterIndex: number
  ) => {
    setPropertyContext(target, propertyKey, contextExecutor);

    // eslint-disable-next-line max-len, @typescript-eslint/no-unsafe-member-access
    const paramExecutor: Predicate<T_ANY, unknown> = (m => parameterName ? m[parameterName] : m);
    const paramContext = target[PARAM_PROPERTY_KEY] ?? {};
    paramContext[propertyKey].parameters[parameterIndex] = paramExecutor;
  };

function setPropertyContext<T extends BaseController>(
  target: T,
  propertyKey: string,
  contextExecutor: Predicate<Request, T_ANY>
): void {
  if (isNil(target[PARAM_PROPERTY_KEY])) {
    target[PARAM_PROPERTY_KEY] = {};
  }

  if (isNil(target[PARAM_PROPERTY_KEY][propertyKey])) {
    const context = { contextExecutor: contextExecutor, parameters: [] };
    target[PARAM_PROPERTY_KEY][propertyKey] = context;
  }
}
