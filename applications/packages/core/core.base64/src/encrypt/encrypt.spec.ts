import { OperationResult } from "@wraithlight/framework.operation-result";

import { toBase64String } from "./encrypt";

describe("toBase64StringSpecs", () => {
    describe("given the utility is initialized", () => {
        describe("when i call it", () => {
            describe("and the parameter is invalid", () => {
                let result: OperationResult<string>;
                beforeEach(() => {
                    result = toBase64String("sloboda navijačima");
                });
                it("should return an opres failure", () => {
                    expect(result.isSuccess).toBe(false);
                });
            });
            describe("and the parameter is valid", () => {
                let result: OperationResult<string>;
                beforeEach(() => {
                    result = toBase64String("sloboda navijacima");
                });
                it("should return an opres success", () => {
                    expect(result.isSuccess).toBe(true);
                });
            });
        });
    });
});
