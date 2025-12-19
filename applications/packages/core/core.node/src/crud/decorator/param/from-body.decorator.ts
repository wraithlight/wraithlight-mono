import { IArgumentDecoratorFactory } from "@wraithlight/core.decorator.types";
import { Predicate } from "@wraithlight/core.linq";
import { isNil } from "@wraithlight/framework.nullable";
import { T_ANY } from "@wraithlight/kernel.any";
import { Request } from "express";

import { BaseController } from "../../controller";

import { ParamDecorator } from "./param.decorator";

/**
 * @deprecated Use `FromBodyV2()` instead.
 */
export const FromBody = <T extends BaseController>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  propertyName?: string | Predicate<any, any>
): IArgumentDecoratorFactory<T> => {
  if (isNil(propertyName)) {
    return ParamDecorator<T>(m => m.body);
  }
  if (typeof propertyName === "string") {
    return ParamDecorator<T>(
      (m: Request) => m.body,
      propertyName
    );
  }
  return ParamDecorator<T>(
    propertyName((m: Request) => m.body)
  );
};

export const FromBodyV2 = <TBody>(
  selector?: Predicate<TBody, T_ANY>
): IArgumentDecoratorFactory<BaseController> => {
  if (isNil(selector)) {
    return ParamDecorator(m => m.body);
  }
  const extractor = (m: Request): T_ANY => {
    return selector(m.body);
  };
  return ParamDecorator(extractor);
};
