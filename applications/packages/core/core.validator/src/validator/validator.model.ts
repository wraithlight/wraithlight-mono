import { Predicate } from "@wraithlight/core.linq";

import { BaseValidationRule } from "../validation-rule";

export interface IValidator<T> {
    validate(object: T): ValidationResult;
}

export interface ValidationRules<T, U> {
    rule: BaseValidationRule<U>;
    predicate: Predicate<T, U>;
    propertyName: string;
}

interface ValidationRuleResult {
    success: boolean;
    propertyName: string;
    errors?: ReadonlyArray<string>;
}

export interface ValidationPropertyError {
    propertyName: string;
    errors: ReadonlyArray<string>;
}

export interface ValidationResult {
    success: boolean;
    errorList: ReadonlyArray<ValidationPropertyError>;
    ruleResults: ReadonlyArray<ValidationRuleResult>;
}
