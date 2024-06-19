import { newGuid } from "@wraithlight/core.guid";
import {
    REQUEST_ID_HEADER_NAME
} from "@wraithlight/core.request-id.constants";
import {
    NextFunction,
    Request,
    Response
} from "express";

export function addRequestId(
  req: Request,
  _response: Response,
  next: NextFunction
): void {
  const guid = newGuid();
  req.headers[REQUEST_ID_HEADER_NAME] = guid;
  next();
}
