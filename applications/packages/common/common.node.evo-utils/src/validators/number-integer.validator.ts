import { ValidationRule, Validator } from "@wraithlight/core.validator";

export class NumberIntegerValidator extends Validator<number> {

  public setupRules(): void {
    this.addValidationRule(
      m => m,
      ValidationRule
        .toBeNumber()
        .toBeInteger()
    );
  }

}
