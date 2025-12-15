import { wlDeepmerge } from "@wraithlight/framework.deepmerge";

import { Predicate } from "../predicate/predicate.model";

export function predicateOverride<TSource, TResult>(
  target: TSource,
  newValue: TResult,
  predicate: Predicate<TSource, TResult>
): TSource {
  const value = predicate(target);
  wlDeepmerge(
    value,
    newValue
  );
  return target;
}
