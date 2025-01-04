import {
  ExternalCheckEmailRequest
} from "@wraithlight/core.user-management.types";
import {
  Validator,
  ValidationRule
} from "@wraithlight/core.validator";

export class CheckEmailValidator extends Validator<ExternalCheckEmailRequest> {

  public setupRules(): void {
    this.addValidationRule(
      m => m.emailAddress,
      ValidationRule
        .toBeString()
        .toHaveMinLength(5)
        .toHaveMaxLength(100)
    );
  }

}
