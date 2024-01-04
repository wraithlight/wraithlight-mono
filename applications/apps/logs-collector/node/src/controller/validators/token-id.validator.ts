import { ValidationRule, Validator } from "@wraithlight/core.validator";

export class TokenIdValidator extends Validator<{ id: number }> {

    public setupRules(): void {
        this.addValidationRule(
            m => m.id,
            ValidationRule
                .toBeNumber()
                .toBeGreaterThan(0)
        );
    }

}
