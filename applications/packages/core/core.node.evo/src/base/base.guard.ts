import { AnyOrT, cast } from "@wraithlight/framework.type-utils";

import { BaseControllerResult } from "./base.model";

export function isBaseControllerResult<T>(
  o: AnyOrT<T>
): o is BaseControllerResult<T> {
  const obj = cast<BaseControllerResult<T>>(o);
  return obj.__brand === "BaseControllerResult<T>";
}
