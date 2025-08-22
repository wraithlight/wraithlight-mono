import { isGuid } from "@wraithlight/core.guid";
import { HttpCode } from "@wraithlight/core.http";
import { HeaderName } from "@wraithlight/domain.http.constants";
import { isEmptyStringOrNil } from "@wraithlight/framework.nullable";
import { Request } from "express";

import { FilterResult } from "../../model";

import {
  createFailResponse,
  createSuccessResponse
} from "./filter";

export const requestIdGuard = (req: Request): FilterResult => {
  const requestId = req.headers[HeaderName.RequestId];
  if (Array.isArray(requestId)) {
    return createFailResponse(HttpCode.BadRequest, "E_REQUESTID_ARRAY");
  }
  if (isEmptyStringOrNil(requestId)) {
    return createFailResponse(HttpCode.BadRequest, "E_REQUESTID_EMPTYORNIL");
  }
  if (!isGuid(requestId)) {
    return createFailResponse(HttpCode.BadRequest, "E_REQUESTID_FORMAT");
  }
  return createSuccessResponse();
};
