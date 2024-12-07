import {
  createFailResponse,
  createFilterAttribute,
  createSuccessResponse
} from "@wraithlight/core.node.evo";
import { HttpCode } from "@wraithlight/core.http";
import { Request } from "express";

export const Authorize = createFilterAttribute(
  (req: Request) => {
    if(req.query.test === "123") {
      return createFailResponse(HttpCode.BadRequest, "E_TEST_QUERY");
    }
    return createSuccessResponse();
  }
);
