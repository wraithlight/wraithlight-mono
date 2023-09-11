import { isNil } from "@wraithlight/core.types";

import { RuleCaseItem, RuleCase } from "./base.validation-rule.model";

export abstract class BaseValidationRule<T> {

    private _ruleCases: Array<RuleCaseItem<T>> = [];

    public abstract testType(): BaseValidationRule<T>;

    public test(object: T): Array<string> {
        const errors: Array<string> = [];
        this._ruleCases.forEach(m => {
            if(!m.callback(object)) {
                errors.push(m.error);
            }
        });
        return errors;
    }

    public toBeNil(): BaseValidationRule<T> {
        this.addRuleCase(
            (item: T) => {
                return isNil(item);
            },
            "E_BASE_TOBENIL"
        );
        return this;
    }

    public notToBeNil(): BaseValidationRule<T> {
        this.addRuleCase(
            (item: T) => {
                return !isNil(item);
            },
            "E_BASE_NOTTOBENIL"
        );
        return this;
    }

    protected addRuleCase(
        callback: RuleCase<T>,
        errorCode: string
    ): BaseValidationRule<T> {
        this._ruleCases.push({
            callback: callback,
            error: errorCode
        });
        return this;
    }

}
