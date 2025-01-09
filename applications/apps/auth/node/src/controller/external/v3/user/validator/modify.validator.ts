import { ExternalUserPatchRequest } from "@wraithlight/core.user-management.types";
import { ValidationRule, Validator } from "@wraithlight/core.validator";
import {
  PASSWORD_REGEX
} from "@wraithlight/common.regex";

import {
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH
} from "./validation.const";

export class ModifyValidator extends Validator<ExternalUserPatchRequest> {

  public setupRules(): void {
    this.addValidationRule(
      m => m.update.password,
      ValidationRule
        .toBeString()
        .toMatchRegex(PASSWORD_REGEX)
        .toHaveMinLength(PASSWORD_MIN_LENGTH)
        .toHaveMaxLength(PASSWORD_MAX_LENGTH)
    );

    this.addValidationRule(
      m => m.update.passwordConfirmation,
      ValidationRule
        .toBeString()
        .toMatchRegex(PASSWORD_REGEX)
        .toHaveMinLength(PASSWORD_MIN_LENGTH)
        .toHaveMaxLength(PASSWORD_MAX_LENGTH)
    );

    this.addValidationRule(
      m => m.confirmationPassword,
      ValidationRule
        .toBeString()
        .toMatchRegex(PASSWORD_REGEX)
        .toHaveMinLength(PASSWORD_MIN_LENGTH)
        .toHaveMaxLength(PASSWORD_MAX_LENGTH)
    );

  }

}
