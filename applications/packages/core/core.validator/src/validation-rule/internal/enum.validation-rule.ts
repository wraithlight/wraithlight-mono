import { BaseValidationRule } from "./base.validation-rule";

export class EnumValidationRule<T> extends BaseValidationRule<T> {

    public testType(): EnumValidationRule<T> {
        this.addRuleCase(
            (item: T) => !!item,
            "E_OBJECT_TESTTYPE"
        );
        return this;
    }

    public toMatchValues(...values: Array<T>): EnumValidationRule<T> {
        this.addRuleCase(
            (item: T) => values.includes(item),
            "E_ENUM_TOMATCHVALUES"
        );
        return this;
    }

    public toNotMatchValues(...values: Array<T>): EnumValidationRule<T> {
        this.addRuleCase(
            (item: T) => !values.includes(item),
            "E_ENUM_TOMATCHVALUES"
        );
        return this;
    }

}
