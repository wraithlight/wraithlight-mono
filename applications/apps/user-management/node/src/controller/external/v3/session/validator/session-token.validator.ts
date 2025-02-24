import { ValidationRule, Validator } from "@wraithlight/core.validator";

export class SessionTokenValidator extends Validator<string> {

  public setupRules(): void {
    this.addValidationRule(
      m => m,
      ValidationRule
        .toBeString()
        .toHaveMinLength(1)
        .notToBeNil()
    );
  }

}