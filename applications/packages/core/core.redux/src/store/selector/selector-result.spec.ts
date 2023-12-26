import { SelectorResult } from "./selector-result";

class TestSelectorResult extends SelectorResult<string> {
    public getParam() {
        return this.params;
    }
}

describe("SelectorResultSpecs", () => {

    const MOCK_PARAMS = (_val: string, _callback: () => void) => {};
    let result: TestSelectorResult;

    describe("given the object has been initialized", () => {

        result = new TestSelectorResult();

        describe("when i call `onSelection`", () => {
            beforeEach(() => {
                result.onSelection(MOCK_PARAMS);
            });

            it("should update `params` accordingly", () => {
                expect(result.getParam()).toBe(MOCK_PARAMS);
            });
        });

    });

});
