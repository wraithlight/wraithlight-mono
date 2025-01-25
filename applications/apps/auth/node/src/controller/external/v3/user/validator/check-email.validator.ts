import {
  ExternalCheckEmailRequest
} from "@wraithlight/core.user-management.types";
import {
  ValidationRule,
  Validator
} from "@wraithlight/core.validator";

import {
  EMAIL_MAX_LENGTH,
  EMAIL_MIN_LENGTH
} from "./validation.const";

export class CheckEmailValidator extends Validator<ExternalCheckEmailRequest> {

  public setupRules(): void {
    this.addValidationRule(
      m => m.emailAddress,
      ValidationRule
        .toBeString()
        .toHaveMinLength(EMAIL_MIN_LENGTH)
        .toHaveMaxLength(EMAIL_MAX_LENGTH)
    );
  }

}
