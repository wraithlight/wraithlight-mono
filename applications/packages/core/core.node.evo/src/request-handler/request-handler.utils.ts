import { HttpCode } from "@wraithlight/core.http";
import { isNan } from "@wraithlight/framework.nullable";

interface StatusCodeContainer {
  statusCode: HttpCode;
}

export const hasStatusCode = (
  e: unknown
): e is StatusCodeContainer => {
  return e instanceof Object
    && "statusCode" in e
    && typeof e.statusCode === "number"
    && !isNan(e.statusCode)
    && isFinite(e.statusCode)
  ;
};
