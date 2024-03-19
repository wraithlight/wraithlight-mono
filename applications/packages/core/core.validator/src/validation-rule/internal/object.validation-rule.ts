import { isNil } from "@wraithlight/core.nullable";

import { BaseValidationRule } from "./base.validation-rule";

export class ObjectValidationRule<T extends object> extends BaseValidationRule<T> {

    public testType(): ObjectValidationRule<T> {
        this.addRuleCase(
            (item: T) => typeof item === "object",
            "E_OBJECT_TESTTYPE"
        );
        return this;
    }

    public toHaveProperties(): ObjectValidationRule<T> {
        this.addRuleCase(
            (item: T) => Object.keys(item).length > 0,
            "E_OBJECT_TOHAVEPROPERTIES"
        );
        return this;
    }

    public toHaveNProperties(num: number): ObjectValidationRule<T> {
        this.addRuleCase(
            (item: T) => Object.keys(item).length === num,
            "E_OBJECT_TOHAVENPROPERTIES"
        );
        return this;
    }

    public toHaveProperty(name: string): ObjectValidationRule<T> {
        this.addRuleCase(
            (item: T) => Object.keys(item).includes(name),
            "E_OBJECT_TOHAVENPROPERTY"
        );
        return this;
    }

    public toHavePropertyNotNull<K extends keyof T>(name: K): ObjectValidationRule<T> {
        this.addRuleCase(
            (item: T) => {
                return isNil(item[name]);
            },
            "E_OBJECT_TOHAVENPROPERTYNOTNULL"
        );
        return this;
    }

    public notToHaveProperty(name: string): ObjectValidationRule<T> {
        this.addRuleCase(
            (item: T) => !Object.keys(item).includes(name),
            "E_OBJECT_NOTTOHAVEPROPERTY"
        );
        return this;
    }

}