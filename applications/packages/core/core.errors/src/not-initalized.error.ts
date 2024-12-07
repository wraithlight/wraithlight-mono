import { HttpCode } from "@wraithlight/core.http";

import { WraithlightError } from "./_wraithlight.error";

export class NotInitializedError extends WraithlightError {

  public statusCode = HttpCode.InternalError;
  public statusMessage = "E_NOT_INITIALIZED";

  constructor(
    objectName: string
  ) {
    super(
      "NotInitializedError",
      `Object: '${objectName}'`
    );
  }
}
