import { ExternalUserPatchRequest } from "@wraithlight/core.user-management.types";
import { ValidationRule, Validator } from "@wraithlight/core.validator";

import {
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH
} from "./validation.const";

// TODO: Regex consolidation
const PASSWORD_REGEX = RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$");

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
