import { IterableValidationRule } from "./iterable.validation-rule";

export class StringValidationRule extends IterableValidationRule<string> {

    public testType(): StringValidationRule {
        this.addRuleCase(
            (item: string) => typeof item === "string",
            "E_STRING_TESTTYPE"
        );
        return this;
    }

    public toMatchRegex(regex: RegExp): StringValidationRule {
        this.addRuleCase(
            (item: string) => regex.test(item),
            "E_STRING_TOMATCHREGEX"
        );
        return this;
    }

    public notToMatchRegex(regex: RegExp): StringValidationRule {
        this.addRuleCase(
            (item: string) => !regex.test(item),
            "E_STRING_TOMATCHREGEX"
        );
        return this;
    }

}
