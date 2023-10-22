import { StringValidationRule } from "./string.validation-rule";

describe("StringValidationRuleSpecs", () => {

    let rule: StringValidationRule;

    const addRuleCaseSpy = jest.spyOn(StringValidationRule.prototype as any, "addRuleCase");

    describe("given the rule is initialized", () => {
        rule = new StringValidationRule();

        describe.each([
            ["testType", () => rule.testType()],
            ["toMatchRegex", () => rule.toMatchRegex(new RegExp("wraithlight"))],
            ["notToMatchRegex", () => rule.notToMatchRegex(new RegExp("wraithlight"))]
        ])("when i call %s", (_: string, ruleMethod: Function) => {
            beforeEach(() => {
                ruleMethod();
            });
            it("should call the underyling `addRuleCase` function", () => {
                expect(addRuleCaseSpy).toHaveBeenCalled();
                expect(addRuleCaseSpy).toHaveBeenCalledTimes(1);
            });
            afterEach(() => {
                jest.resetAllMocks();
            });
        });

    });

});
