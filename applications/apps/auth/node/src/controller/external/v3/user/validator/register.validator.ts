import { ExternalUserPostRequest } from "@wraithlight/core.user-management.types";
import { ValidationRule, Validator } from "@wraithlight/core.validator";

import {
  EMAIL_MAX_LENGTH,
  EMAIL_MIN_LENGTH,
  GUID_LENGTH,
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
  USERNAME_MAX_LENGTH,
  USERNAME_MIN_LENGTH
} from "./validation.const";

const USERNAME_REGEX = new RegExp("^[a-zA-Z0-9]+$");
const EMAIL_REGEX = new RegExp("^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$");
const PASSWORD_REGEX = RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$");

export class RegisterValidator extends Validator<ExternalUserPostRequest> {

  public setupRules(): void {
    this.addValidationRule(
      m => m.emailAddress,
      ValidationRule
        .toBeString()
        .toMatchRegex(EMAIL_REGEX)
        .toHaveMinLength(EMAIL_MIN_LENGTH)
        .toHaveMaxLength(EMAIL_MAX_LENGTH)
    );

    this.addValidationRule(
      m => m.languageId,
      ValidationRule
        .toBeString()
        .toBeGuid()
        .toHaveLength(GUID_LENGTH)
    );

    this.addValidationRule(
      m => m.username,
      ValidationRule
        .toBeString()
        .toMatchRegex(USERNAME_REGEX)
        .toHaveMinLength(USERNAME_MIN_LENGTH)
        .toHaveMaxLength(USERNAME_MAX_LENGTH)
    );

    this.addValidationRule(
      m => m.password,
      ValidationRule
        .toBeString()
        .toMatchRegex(PASSWORD_REGEX)
        .toHaveMinLength(PASSWORD_MIN_LENGTH)
        .toHaveMaxLength(PASSWORD_MAX_LENGTH)
    );

    this.addValidationRule(
      m => m.passwordConfirmation,
      ValidationRule
        .toBeString()
        .toMatchRegex(PASSWORD_REGEX)
        .toHaveMinLength(PASSWORD_MIN_LENGTH)
        .toHaveMaxLength(PASSWORD_MAX_LENGTH)
    );

  }

}