import { Predicate } from "../predicate";

import { CHAIN_SEPARATOR } from "./get-property-name.const";

export function getPropertyName<T, U>(predicate: Predicate<T, U>): string {
  const predicateStr = predicate.toString();
  const parts = predicateStr.split(CHAIN_SEPARATOR);
  return parts[parts.length - 1];
}
