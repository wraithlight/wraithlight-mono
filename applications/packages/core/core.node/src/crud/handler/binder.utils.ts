import { isGuid } from "@wraithlight/core.guid";
import { HttpCode } from "@wraithlight/core.http";
import { isEmptyStringOrNil } from "@wraithlight/core.nullable";
import { HeaderName } from "@wraithlight/domain.http.constants";
import { Request } from "express";

import { FilterResult } from "../internal";

export const requestIdFilter = async (req: Request): Promise<FilterResult> => {
  const requestId = req.headers[HeaderName.RequestId];
  if (
    Array.isArray(requestId) ||
    isEmptyStringOrNil(requestId) ||
    !isGuid(requestId)) {
    return Promise.resolve({
      success: false,
      errorHttpCode: HttpCode.BadRequest
    });
  }
  return Promise.resolve({
    success: true
  });
};
