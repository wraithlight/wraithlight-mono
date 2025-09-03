import { EmptyReadonlyArray } from "./empty-readonly-array.type";

export function isEmptyReadonlyArray<T>(
  object: unknown
): object is EmptyReadonlyArray<T> {
  if (!Array.isArray(object)) return false;
  if (object.length !== 0) return false;
  return true;
}
