import { IArgumentDecoratorFactory } from "@wraithlight/core.decorator.types";
import { Predicate } from "@wraithlight/core.linq";
import { isNil } from "@wraithlight/core.nullable";
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selector?: Predicate<TBody, any>
): IArgumentDecoratorFactory<BaseController> => {
  if (isNil(selector)) {
    return ParamDecorator(m => m.body);
  }
  const extractor = (m: Request) => {
    return selector(m.body);
  };
  return ParamDecorator(extractor);
};
