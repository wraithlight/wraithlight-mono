import { HttpCode } from "@wraithlight/core.http";
import {
  createFailResponse,
  createFilterAttribute,
  createSuccessResponse
} from "@wraithlight/core.node.evo";
import {
  HeaderName
} from "@wraithlight/domain.http.constants";
import { Request } from "express";

export const WithApiToken = createFilterAttribute((req: Request) => {
  const header = req.headers[HeaderName.ApiToken];
  if (typeof header !== "string") {
    return createFailResponse(HttpCode.BadRequest, "E_SESSION_TOKEN");
  }
  return createSuccessResponse();
});
