import { deepmergeFacade } from "@wraithlight/facade.deepmerge";

import { DeepPartial } from "../deeppartial";

export function wlDeepmerge<T>(
  target: T,
  additional: DeepPartial<T> | Partial<T> | T
): T {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  return deepmergeFacade(
    target,
    additional
  ) as T;
}
