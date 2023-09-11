import { BaseValidationRule } from "./base.validation-rule";

export class BooleanValidationRule extends BaseValidationRule<boolean> {

    public testType(): BooleanValidationRule {
        this.addRuleCase(
            (item: boolean) => typeof item === "boolean",
            "E_BOOLEAN_TESTTYPE"
        );
        return this;
    }

    public toBeTrue(): BooleanValidationRule {
        this.addRuleCase(
            (item: boolean) => {
                return !!item;
            },
            "E_BOOLEAN_TOBETRUE"
        );
        return this;
    }

    public toBeFalse(): BooleanValidationRule {
        this.addRuleCase(
            (item: boolean) => {
                return !item;
            },
            "E_BOOLEAN_TOBEFALSE"
        );
        return this;
    }

}
