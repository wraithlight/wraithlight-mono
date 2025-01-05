import {
  ExternalCheckUsernameRequest
} from "@wraithlight/core.user-management.types";
import {
  ValidationRule,
  Validator
} from "@wraithlight/core.validator";

import {
  USERNAME_MAX_LENGTH,
  USERNAME_MIN_LENGTH
} from "./validation.const";

export class CheckUsernameValidator
  extends Validator<ExternalCheckUsernameRequest>
{

  public setupRules(): void {
    this.addValidationRule(
      m => m.username,
      ValidationRule
        .toBeString()
        .toHaveMinLength(USERNAME_MIN_LENGTH)
        .toHaveMaxLength(USERNAME_MAX_LENGTH)
    );
  }

}
