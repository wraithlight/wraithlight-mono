import {
  createFailResponse,
  createFilterAttribute,
  createSuccessResponse
} from "@wraithlight/core.node.evo";
import {
  HeaderName
} from "@wraithlight/domain.http.constants";
import { Request } from "express";

/**
 * @deprecated Import from "`common.node.evo-utils`" instead.
 */
export const WithApiToken = createFilterAttribute((req: Request) => {
  const header = req.headers[HeaderName.ApiToken];
  if (typeof header !== "string") {
    return createFailResponse(400, "E_SESSION_TOKEN");
  }
  return createSuccessResponse();
});
