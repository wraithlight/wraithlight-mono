import { HttpCode } from "@wraithlight/core.http";

import { WraithlightError } from "./_wraithlight.error";

export class InvalidArgumentError extends WraithlightError {

  public statusCode = HttpCode.InternalError;
  public statusMessage = "E_INVALID_ARGUMENT";

  constructor(
    argumentName: string
  ) {
    super(
      "InvalidArgumentError",
      `Argument: '${argumentName}'`
    );
  }
}
