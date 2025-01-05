import { ValidationRule, Validator } from "@wraithlight/core.validator";
import { ExternalUserPostRequest } from "@wraithlight/core.user-management.types";

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
        .toHaveMinLength(5)
        .toHaveMaxLength(100)
    );
    
    this.addValidationRule(
      m => m.languageId,
      ValidationRule
        .toBeString()
        .toBeGuid()
        .toHaveLength(36)
    );

    this.addValidationRule(
      m => m.username,
      ValidationRule
        .toBeString()
        .toMatchRegex(USERNAME_REGEX)
        .toHaveMinLength(5)
        .toHaveMaxLength(100)
    );

    this.addValidationRule(
      m => m.password,
      ValidationRule
        .toBeString()
        .toMatchRegex(PASSWORD_REGEX)
        .toHaveMinLength(5)
        .toHaveMaxLength(100)
    );

    this.addValidationRule(
      m => m.passwordConfirmation,
      ValidationRule
        .toBeString()
        .toMatchRegex(PASSWORD_REGEX)
        .toHaveMinLength(5)
        .toHaveMaxLength(100)
    );

  }

}
