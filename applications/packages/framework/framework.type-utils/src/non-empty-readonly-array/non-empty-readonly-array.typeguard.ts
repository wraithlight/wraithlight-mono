import { NonEmptyReadonlyArray } from "../non-empty-readonly-array/non-empty-readonly-array.type";

export function isNonEmptyReadonlyArray<T>(
  object: unknown
): object is NonEmptyReadonlyArray<T> {
  if (!Array.isArray(object)) return false;
  if (object.length === 0) return false;
  return true;
}
