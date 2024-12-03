import { BaseControllerResult } from "./base.model";

export function isBaseControllerResult<T>(
  o: BaseControllerResult<T>
): o is BaseControllerResult<T> {
  return o.__brand === "BaseControllerResult<T>";
}
