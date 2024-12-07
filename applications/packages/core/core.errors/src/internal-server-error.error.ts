import { HttpCode } from "@wraithlight/core.http";

import { WraithlightError } from "./_wraithlight.error";

export class InternalServerError extends WraithlightError {

  public statusCode = HttpCode.InternalError;
  public statusMessage = "E_INTERNAL_SERVER_ERROR";

  constructor() {
    super(
      "InternalServerError",
      "E_INTERNALSERVERERROR"
    );
  }
}
