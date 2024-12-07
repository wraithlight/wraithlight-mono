import { Predicate } from "@wraithlight/core.linq";

import { BaseController } from "../../base";

import { IParamDecorator, ParamDecorator } from "./_param.decorator";

const DEFAULT_EXTRACTOR = <T>() => (m: T): T => m;

export const BodyDecorator = <T>(
  predicate?: Predicate<T, any>
): IParamDecorator<BaseController> => ParamDecorator(
  m => m.body,
  predicate ?? DEFAULT_EXTRACTOR<T>()
);
