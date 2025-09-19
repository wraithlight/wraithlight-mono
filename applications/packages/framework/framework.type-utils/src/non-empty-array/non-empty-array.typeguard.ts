import { NonEmptyArray } from "./non-empty-array.type";

export function isNonEmptyArray<T>(
  object: unknown
): object is NonEmptyArray<T> {
  if (!Array.isArray(object)) return false;
  if (object.length === 0) return false;
  return true;
}
