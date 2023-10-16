import { ValidationRule, Validator } from "@wraithlight/core.validator";

export class TokenValidator extends Validator<{ token: string }> {

    public setupRules(): void {
        this.addValidationRule(
            m => m.token,
            ValidationRule
                .toBeString()
                .notToBeNil()
        );
    }

}