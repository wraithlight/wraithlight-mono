import { ValidationRule, Validator } from "@wraithlight/core.validator";

export class NumberMinMaxValidator extends Validator<number> {

  constructor(
    private readonly _min: number,
    private readonly _max: number
  ) {
    super();
  }

  public setupRules(): void {
    this.addValidationRule(
      m => m,
      ValidationRule
        .toBeNumber()
        .toBeInRange(this._min, this._max)
        .notToBeNil()
    );
  }

}
