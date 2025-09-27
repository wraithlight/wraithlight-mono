import { REQUEST_ID_HEADER_NAME } from "@wraithlight/core.request-id.constants";
import { Nullable } from "@wraithlight/framework.nullable";
import { GLOBAL_UNDEFINED } from "@wraithlight/kernel.undefined";
import { Request } from "express";

export function getRequestId(request: Request): Nullable<string> {
  const header = request.headers[REQUEST_ID_HEADER_NAME];
  if (typeof header === "string") {
    return header;
  }
  return GLOBAL_UNDEFINED;
}
