import { HttpCode } from "@wraithlight/core.http";

import { WraithlightError } from "./_wraithlight.error";

export class NotFoundError extends WraithlightError {

  public statusCode = HttpCode.NotFound;
  public statusMessage = "E_NOT_FOUND_ERROR";

  constructor() {
    super(
      "NotFoundError",
      "E_NOTFOUND"
    );
  }
}
