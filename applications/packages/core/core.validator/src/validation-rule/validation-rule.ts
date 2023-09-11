import {
    ArrayValidationRule,
    BaseValidationRule,
    BooleanValidationRule,
    EnumValidationRule,
    NumberValidationRule,
    ObjectValidationRule,
    StringValidationRule
} from "./internal";

export class ValidationRule {

    public static toBeNumber(): NumberValidationRule {
        return this.toRule<number, NumberValidationRule>(new NumberValidationRule());
    }

    public static toBeString(): StringValidationRule {
        return this.toRule<string, StringValidationRule>(new StringValidationRule());
    }

    public static toBeBoolean(): BooleanValidationRule {
        return this.toRule<boolean, BooleanValidationRule>(new BooleanValidationRule());
    }

    public static toBeArray<T>(): ArrayValidationRule<T> {
        return this.toRule<Array<T>, ArrayValidationRule<T>>(new ArrayValidationRule());
    }

    public static toBeObject<T extends {}>(): ObjectValidationRule<T> {
        return this.toRule<T, ObjectValidationRule<T>>(new ObjectValidationRule());
    }

    public static toBeEnum<T extends {}>(): EnumValidationRule<T> {
        return this.toRule<T, EnumValidationRule<T>>(new EnumValidationRule());
    }

    private static toRule<U, T extends BaseValidationRule<U>>(rule: T): T {
        rule.testType();
        return rule;
    }

}
