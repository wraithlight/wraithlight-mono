import { Predicate } from "@wraithlight/core.linq";
import { isNil } from "@wraithlight/core.nullable";

import { ValidationType } from "./array.validation-rule.model";
import { IterableValidationRule } from "./iterable.validation-rule";

export class ArrayValidationRule<T> extends IterableValidationRule<Array<T>> {

    public testType(): ArrayValidationRule<T> {
        this.addRuleCase(
            (item: Array<T>) => Array.isArray(item),
            "E_ARRAY_TESTTYPE"
        );
        return this;
    }

    public toBeArray(): ArrayValidationRule<T> {
        this.addRuleCase(
            (m: Array<T>) => Array.isArray(m),
            "E_ARRAY_TOBEARRAY"
        );
        return this;
    }

    public toHaveItemTypes(type: ValidationType): ArrayValidationRule<T> {
        this.addRuleCase(
            (array: Array<T>) => {
                const result = array.map(m => {
                    switch(type) {
                        case "string": return typeof m === "string";
                        case "number": return typeof m === "number" || typeof m === "bigint";
                        case "object": return typeof m === "object";
                        case "boolean": return typeof m === "boolean";
                        case "array": return Array.isArray(m);
                    }
                });
                return result.includes(false);
            },
            "E_ARRAY_TOHAVEITEMTYPES"
        );
        return this;
    }

    public toHavePropertyOnItems<U>(
        predicate: Predicate<T, U>
    ): ArrayValidationRule<T> {
        this.addRuleCase(
            (array: Array<T>) => {
                return array.map(m => {
                    try {
                        return isNil(predicate(m));
                    } catch {
                        return false;
                    }
                }).includes(false);
            },
            "E_ARRAY_TOHAVEPROPERTYONITEMS"
        );
        return this;
    }

}
