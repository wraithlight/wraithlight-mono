import {
  PASSWORD_REGEX
} from "@wraithlight/common.regex";
import { ExternalSessionPostRequest } from "@wraithlight/core.user-management.types";
import { ValidationRule, Validator } from "@wraithlight/core.validator";

import { PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH } from "./validation.const";

export class LoginValidator extends Validator<ExternalSessionPostRequest> {

  public setupRules(): void {
    this.addValidationRule(
      m => m.identifier,
      ValidationRule
        .toBeString()
    );

    this.addValidationRule(
      m => m.keepSignedIn,
      ValidationRule
        .toBeBoolean()
    );

    this.addValidationRule(
      m => m.password,
      ValidationRule
        .toBeString()
        .toMatchRegex(PASSWORD_REGEX)
        .toHaveMinLength(PASSWORD_MIN_LENGTH)
        .toHaveMaxLength(PASSWORD_MAX_LENGTH)
    );
  }

}
