import { deepmerge } from "deepmerge-ts";

export function deepmergeFacade<T>(...objects: Array<T>): T {
    const result = deepmerge(...objects);
    return result as T;
}