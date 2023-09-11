import { Predicate } from "@wraithlight/core.linq";

import { BaseValidationRule } from "../validation-rule";

export interface IValidator<T> {
    validate(object: T): ReadonlyArray<ValidationResult>;
}

export interface ValidationRules<T, U> {
    rule: BaseValidationRule<U>;
    predicate: Predicate<T, U>;
}

export interface ValidationResult {
    success: boolean;
    propertyName: string;
    errors?: ReadonlyArray<string>;
}
