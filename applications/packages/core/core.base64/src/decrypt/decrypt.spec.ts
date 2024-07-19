import { OperationResult } from "@wraithlight/framework.operation-result";

import { fromBase64String } from "./decrypt";

describe("fromBase64StringSpecs", () => {
    describe("given the utility is initialized", () => {
        describe("when i call it", () => {
            describe("and the parameter is invalid", () => {
                let result: OperationResult<string>;
                beforeEach(() => {
                    result = fromBase64String("4rdHFh%2BHYoS8oLdVvbUzEVqB8Lvm7kSPnuwF0AAABYQ%3D");
                });
                it("should return an opres failure", () => {
                    expect(result.isSuccess).toBe(false);
                });
            });
            describe("and the parameter is valid", () => {
                let result: OperationResult<string>;
                beforeEach(() => {
                    result = fromBase64String("c2xvYm9kYSBuYXZpamFjaW1h");
                });
                it("should return an opres success", () => {
                    expect(result.isSuccess).toBe(true);
                });
            });
        });
    });
});
