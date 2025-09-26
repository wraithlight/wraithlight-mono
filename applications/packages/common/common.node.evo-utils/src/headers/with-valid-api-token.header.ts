import { HttpCode } from "@wraithlight/core.http";
import {
  createFailResponse,
  createFilterAttribute,
  createSuccessResponse
} from "@wraithlight/core.node.evo";
import { HeaderName } from "@wraithlight/domain.http.constants";
import { Request } from "express";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const WithValidApiToken = (
  tokens: ReadonlyArray<string>
) => createFilterAttribute(
  (req: Request) => {
    const token = req.headers[HeaderName.ApiToken];
    if (typeof token !== "string") {
      return createFailResponse(HttpCode.BadRequest, "E_APITOKEN_TYPE");
    }
    if (!tokens.includes(token)) {
      return createFailResponse(HttpCode.Unauthorized, "E_APITOKEN");
    }
    return createSuccessResponse();
  }
);
