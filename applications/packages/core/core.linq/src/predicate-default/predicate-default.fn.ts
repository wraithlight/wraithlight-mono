import { Predicate } from "../predicate/predicate.model";

export function predicateDefault<TSource, TResult>(
  target: TSource,
  predicate: Predicate<TSource, TResult>,
  defaultValue: TResult
): TResult {
  return predicate(target) ?? defaultValue;
}
