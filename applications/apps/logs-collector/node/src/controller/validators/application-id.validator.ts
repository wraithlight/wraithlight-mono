import { ValidationRule, Validator } from "@wraithlight/core.validator";

export class ApplicationIdValidator extends Validator<{ applicationId: number }> {

    public setupRules(): void {
        this.addValidationRule(
            m => m.applicationId,
            ValidationRule
                .toBeNumber()
                .toBeGreaterThan(0)
        );
    }

}
