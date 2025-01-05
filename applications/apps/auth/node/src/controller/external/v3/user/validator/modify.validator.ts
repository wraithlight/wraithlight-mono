import { ValidationRule, Validator } from "@wraithlight/core.validator";
import { ExternalUserPatchRequest } from "@wraithlight/core.user-management.types";

// TODO: Regex consolidation
const PASSWORD_REGEX = RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$");

export class ModifyValidator extends Validator<ExternalUserPatchRequest> {

  public setupRules(): void {
    this.addValidationRule(
      m => m.update.password,
      ValidationRule
        .toBeString()
        .toMatchRegex(PASSWORD_REGEX)
        .toHaveMinLength(5)
        .toHaveMaxLength(100)
    );

    this.addValidationRule(
      m => m.update.passwordConfirmation,
      ValidationRule
        .toBeString()
        .toMatchRegex(PASSWORD_REGEX)
        .toHaveMinLength(5)
        .toHaveMaxLength(100)
    );

    this.addValidationRule(
      m => m.confirmationPassword,
      ValidationRule
        .toBeString()
        .toMatchRegex(PASSWORD_REGEX)
        .toHaveMinLength(5)
        .toHaveMaxLength(100)
    );

  }

}
