import { HttpCode } from "@wraithlight/core.http";

import { WraithlightError } from "./_wraithlight.error";

export class BadRequestError extends WraithlightError {

  public statusCode = HttpCode.BadRequest;
  public statusMessage = "E_BADREQUEST";

  constructor() {
    super(
      "BadRequestError",
      "E_BADREQUEST"
    );
  }
}
