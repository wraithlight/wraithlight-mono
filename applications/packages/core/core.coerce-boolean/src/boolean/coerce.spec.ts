import { coerceBoolean } from "./coerce";

describe("coerceBooleanSpecs", () => {
    describe("given the utility is initialized", () => {
        describe("when i call it", () => {
            describe("and the value is boolean", () => {
                it.each([
                    [false, false],
                    [true, true]
                ])("it should return its value", (input: boolean, result: boolean) => {
                    expect(coerceBoolean(input)).toBe(result);
                });
            });
            describe("and the value is number", () => {
                it.each([
                    ["and its negative Infinity", -Infinity, true],
                    ["and its negative", -1, true],
                    ["and its negative zero", -0, false],
                    ["and its zero", 0, false],
                    ["and its positive zero", +0, false],
                    ["and its positive", 1, true],
                    ["and its positive Infinity", Infinity, true]
                ])("%s (%s) should be (%s)", (_, value, result: boolean) => {
                    expect(coerceBoolean(value)).toBe(result);
                });
            });
            describe("and the value is string", () => {
                it.each([
                    ["and its empty", "", false],
                    ["and its non empty", "wraithlight", true]
                ])("%s ('%s') should be (%s)", (_, value, result: boolean) => {
                    expect(coerceBoolean(value)).toBe(result);
                });
            });
            describe("and the value is array", () => {
                it.each([
                    ["and its empty", [], true],
                    ["and its non empty", ["wraithlight"], true]
                ])("%s ('%s') should be (%s)", (_, value, result: boolean) => {
                    expect(coerceBoolean(value)).toBe(result);
                });
            });
            describe("and the value is object", () => {
                it.each([
                    ["and its empty", {}, true],
                    ["and its non empty", { name: "wraithlight" }, true]
                ])("%s ('%s') should be (%s)", (_, value, result: boolean) => {
                    expect(coerceBoolean(value)).toBe(result);
                });
            });
            describe("and the value is NaN", () => {
                it.each([
                    ["and its negative", -NaN, false],
                    ["and its positive", +NaN, false]
                ])("%s ('%s') should be (%s)", (_, value, result: boolean) => {
                    expect(coerceBoolean(value)).toBe(result);
                });
            });
        });
    });
});
