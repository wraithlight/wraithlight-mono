import { IArgumentDecoratorFactory } from "@wraithlight/core.decorator.types";
import { Predicate } from "@wraithlight/core.linq";
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
  target[PARAM_PROPERTY_KEY] = target[PARAM_PROPERTY_KEY] ?? {};
  // eslint-disable-next-line max-len
  target[PARAM_PROPERTY_KEY][propertyKey] = target[PARAM_PROPERTY_KEY][propertyKey] ?? { contextExecutor: contextExecutor, parameters: [] };

  // eslint-disable-next-line max-len, @typescript-eslint/no-unsafe-member-access
  const paramExecutor: Predicate<any, unknown> = (m => parameterName ? m[parameterName] : m);
  // eslint-disable-next-line max-len
  target[PARAM_PROPERTY_KEY][propertyKey].parameters[parameterIndex] = paramExecutor;
};
