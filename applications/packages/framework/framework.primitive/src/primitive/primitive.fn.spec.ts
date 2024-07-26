import { isPrimitive } from "./primitive.fn";

describe("isPrimitiveSpecs", () => {
    describe("given the utility is initialized", () => {
        describe("when i call it", () => {
            describe("and the value is primitive", () => {
                it.each([
                    [""],
                    [1],
                    [false],
                    [NaN]
                ])("it should be true for %s", (m: any) => {
                    expect(isPrimitive(m)).toBe(true);
                });
            });
            describe("and the value is not primitive", () => {
                it.each([
                    [[]],
                    [{}],
                    [undefined],
                    [null]
                ])("it should be false for %s", (m: any) => {
                    expect(isPrimitive(m)).toBe(false);
                });
            });
        });
    });
});
