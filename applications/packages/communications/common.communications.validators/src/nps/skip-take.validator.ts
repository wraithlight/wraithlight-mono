import { ValidationRule, Validator } from "@wraithlight/core.validator";

export class SkipTakeValidator extends Validator<number> {
  public setupRules(): void {
    this.addValidationRule(
      m => m,
      ValidationRule
        .toBeNumber()
        .toBeInRange(0, +Infinity)
    );
  }
}
