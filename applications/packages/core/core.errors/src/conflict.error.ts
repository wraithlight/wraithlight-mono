import { HttpCode } from "@wraithlight/core.http";

import { WraithlightError } from "./_wraithlight.error";

export class ConflictError extends WraithlightError {

  public statusCode = HttpCode.Conflict;
  public statusMessage = "E_CONFLICT";

  constructor() {
    super(
      "ConflictError",
      "E_CONFLICT"
    );
  }
}
