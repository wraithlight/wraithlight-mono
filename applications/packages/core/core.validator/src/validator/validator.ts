import { Predicate, getPropertyName } from "@wraithlight/core.linq";

import { BaseValidationRule } from "../validation-rule";

import {
    IValidator,
    ValidationPropertyError,
    ValidationResult,
    ValidationRules
} from "./validator.model";


export abstract class Validator<T> implements IValidator<T> {

    private readonly _rules: Array<ValidationRules<T, any>> = [];

    constructor() {
        this.setupRules();
    }

    public abstract setupRules(): void;

    public validate(object: T): ValidationResult {
        const testResults = this._rules.map(m => {
            const testResult = m.rule.test(m.predicate(object))
            return {
                propertyName: m.propertyName,
                testResult: testResult
            };
        });
        const errors: ReadonlyArray<ValidationPropertyError> = testResults
            .filter(m => m.testResult.length !== 0)
            .map(m => ({
                propertyName: m.propertyName,
                errors: m.testResult
            })
        );
        return {
            success: errors.length > 0,
            errorList: errors,
            ruleResults: testResults
                .map(m => ({
                    success: m.testResult.length === 0,
                    propertyName: m.propertyName,
                    errors: m.testResult
                })
            )
        }
    }

    protected addValidationRule<U>(
        predicate: Predicate<T, U>,
        rule: BaseValidationRule<U>
    ): void {
        this._rules.push({
            rule: rule,
            predicate: predicate,
            propertyName: getPropertyName(predicate)
        });
    }

}
