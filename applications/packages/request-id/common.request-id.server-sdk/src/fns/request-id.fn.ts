import { Nullable } from "@wraithlight/core.nullable";
import { REQUEST_ID_HEADER_NAME } from "@wraithlight/core.request-id.constants";
import { Request } from "express";

export function getRequestId(request: Request): Nullable<string> {
  const header = request.headers[REQUEST_ID_HEADER_NAME];
  if (typeof header === "string") {
    return header;
  }
  return undefined;
}
