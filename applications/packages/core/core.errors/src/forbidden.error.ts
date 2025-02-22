import { HttpCode } from "@wraithlight/core.http";

import { WraithlightError } from "./_wraithlight.error";

export class ForbiddenError extends WraithlightError {

  public statusCode = HttpCode.Forbidden;
  public statusMessage = "E_FORBIDDEN";

  constructor() {
    super(
      "ForbiddenError",
      "E_FORBIDDEN"
    );
  }
}
