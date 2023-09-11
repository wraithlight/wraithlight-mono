import { Predicate, getPropertyName } from "@wraithlight/core.linq";

import { BaseValidationRule } from "../validation-rule";

import { IValidator, ValidationResult, ValidationRules } from "./validator.model";


export abstract class Validator<T> implements IValidator<T> {

    private readonly _rules: Array<ValidationRules<T, any>> = [];

    public abstract setupRules(): void;

    public validate(object: T): Array<ValidationResult> {
        const testResults = this._rules.map(m => {
            const propertyName = getPropertyName(m.predicate);
            const testResult = m.rule.test(m.predicate(object))
            return {
                propertyName: propertyName,
                testResult: testResult
            };
        });
        return testResults.map(m => ({
            success: m.testResult.length === 0,
            propertyName: m.propertyName,
            errors: m.testResult
        }));
    }

    protected addValidationRule<U>(
        predicate: Predicate<T, U>,
        rule: BaseValidationRule<U>
    ): void {
        this._rules.push({
            rule: rule,
            predicate: predicate
        });
    }

}
