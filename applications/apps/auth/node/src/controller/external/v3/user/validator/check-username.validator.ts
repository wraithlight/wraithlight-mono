import {
  ExternalCheckUsernameRequest
} from "@wraithlight/core.user-management.types";
import {
  Validator,
  ValidationRule
} from "@wraithlight/core.validator";

export class CheckUsernameValidator extends Validator<ExternalCheckUsernameRequest> {

  public setupRules(): void {
    this.addValidationRule(
      m => m.username,
      ValidationRule
        .toBeString()
        .toHaveMinLength(3)
        .toHaveMaxLength(100)
    );
  }

}
