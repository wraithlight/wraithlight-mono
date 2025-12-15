import { HttpCode } from "@wraithlight/core.http";

import { WraithlightError } from "./_wraithlight.error";

export class AlreadyInitializedError extends WraithlightError {
  public statusCode = HttpCode.InternalError;
  public statusMessage = "E_ALREADY_INITIALIZED";

  constructor(
    objectName: string
  ) {
    super(
      "AlreadyInitializedError",
      `Object: '${objectName}'`
    );
  }
}
