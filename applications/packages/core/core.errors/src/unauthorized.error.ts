import { HttpCode } from "@wraithlight/core.http";

import { WraithlightError } from "./_wraithlight.error";

export class UnauthorizedError extends WraithlightError {

  public statusCode = HttpCode.Unauthorized;
  public statusMessage = "E_UNAUTHORIZED";

  constructor() {
    super(
      "UnauthorizedError",
      "E_UNAUTHORIZED"
    );
  }
}
