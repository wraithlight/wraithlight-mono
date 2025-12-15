import { deepmerge } from "deepmerge-ts";

export function deepmergeFacade<T>(...objects: Array<T>): T {
  const result = deepmerge(...objects);
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  return result as T;
}