import { BaseValidationRule } from "./base.validation-rule";

export class NumberValidationRule extends BaseValidationRule<number> {

    public testType(): NumberValidationRule {
        this.addRuleCase(
            (item: number) => typeof item === "number",
            "E_NUMBER_TESTTYPE"
        );
        return this;
    }

    public toBeInRange(min: number = -Infinity, max: number = Infinity): NumberValidationRule {
        this.addRuleCase(
            (item: number) => {
                return item > min && item < max;
            },
            "E_NUMBER_TOBEINRANGE"
        );
        return this;
    }

    public noToBeInRange(min: number = -Infinity, max: number = Infinity): NumberValidationRule {
        this.addRuleCase(
            (item: number) => {
                return !(item > min && item < max);
            },
            "E_NUMBER_TOBEINRANGE"
        );
        return this;
    }

    public toBe(values: ReadonlyArray<number>): NumberValidationRule {
        this.addRuleCase(
            (item: number) => {
                return values.includes(item);
            },
            "E_NUMBER_TOBE"
        );
        return this;
    }

    public notToBe(values: ReadonlyArray<number>): NumberValidationRule {
        this.addRuleCase(
            (item: number) => {
                return !values.includes(item);
            },
            "E_NUMBER_NOTTOBE"
        );
        return this;
    }

}
