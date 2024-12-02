import { Predicate } from "@wraithlight/core.linq";

import { ParamDecorator } from "./_param.decorator";

const DEFAULT_EXTRACTOR = <T>() => (m: T) => m;

export const BodyDecorator = <T>(
  predicate?: Predicate<T, any>
) => ParamDecorator(
  m => m.body,
  predicate ?? DEFAULT_EXTRACTOR<T>()
);
