import { DeepPartial } from "@wraithlight/core.types";
import { deepmerge } from "deepmerge-ts";

export function wlDeepmerge<T>(
    target: T,
    additional: DeepPartial<T> | Partial<T> | T
): T {
    return deepmerge(target, additional) as T;
}
