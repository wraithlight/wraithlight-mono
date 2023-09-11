import { BaseValidationRule } from "./base.validation-rule";
import { LengthContainer } from "./iterable.validation-rule.model";

export abstract class IterableValidationRule<T extends LengthContainer> extends BaseValidationRule<T> {

    public toHaveLength(length: number): IterableValidationRule<T> {
        this.addRuleCase(
            (item: T) => {
                return item.length === length;
            },
            "E_ITERABLE_TOHAVELENGTH"
        );
        return this;
    }

    public toHaveMinLength(minLength: number): IterableValidationRule<T> {
        this.addRuleCase(
            (item: T) => {
                return item.length >= minLength;
            },
            "E_ITERABLE_TOHAVEMINLENGTH"
        );
        return this;
    }

    public toHaveMaxLength(maxLength: number): IterableValidationRule<T> {
        this.addRuleCase(
            (item: T) => {
                return item.length <= maxLength;
            },
            "E_ITERABLE_TOHAVEMAXLENGTH"
        );
        return this;
    }

}
