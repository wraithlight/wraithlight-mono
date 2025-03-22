import { IListResult } from "@wraithlight/domain.http.types";
import { intersection } from "@wraithlight/framework.type-utils";

const KEYS = [
  "items",
  "visibleCount",
  "allCount",
  "skip",
  "take",
];

export function isHttpListResult<T>(data: unknown): data is IListResult<T> {
  const intersectionItems = intersection(
    Object.getOwnPropertyNames(data),
    KEYS
  )
  return intersectionItems.length === KEYS.length; 
}
