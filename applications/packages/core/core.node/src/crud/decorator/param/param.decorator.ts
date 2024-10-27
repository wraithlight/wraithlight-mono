import { IArgumentDecoratorFactory } from "@wraithlight/core.decorator.types";
import { Predicate } from "@wraithlight/core.linq";
import { isNil } from "@wraithlight/core.nullable";
import { Request } from "express";

import { BaseController } from "../../controller";

import { PARAM_PROPERTY_KEY } from "./param.const";

export const ParamDecorator = <T extends BaseController>(
  contextExecutor: Predicate<Request, any>,
  parameterName?: string
): IArgumentDecoratorFactory<T> => (
  target: T,
  propertyKey: string,
  parameterIndex: number
) => {
  setPropertyContext(target, propertyKey, contextExecutor);

  // eslint-disable-next-line max-len, @typescript-eslint/no-unsafe-member-access
  const paramExecutor: Predicate<any, unknown> = (m => parameterName ? m[parameterName] : m);
  const paramContext = target[PARAM_PROPERTY_KEY] ?? {};
  paramContext[propertyKey].parameters[parameterIndex] = paramExecutor;
};

function setPropertyContext<T extends BaseController>(
  target: T,
  propertyKey: string,
  contextExecutor: Predicate<Request, any>
): void {
  if (isNil(target[PARAM_PROPERTY_KEY])) {
    target[PARAM_PROPERTY_KEY] = {};
  }

  if (isNil(target[PARAM_PROPERTY_KEY][propertyKey])) {
    const context = { contextExecutor: contextExecutor, parameters: [] };
    target[PARAM_PROPERTY_KEY][propertyKey] = context;
  }
}
