import { BaseControllerResult } from "./base.model";

export function isBaseControllerResult<T>(
  o: any
): o is BaseControllerResult<T> {
  return o.__brand === "BaseControllerResult<T>";
}
