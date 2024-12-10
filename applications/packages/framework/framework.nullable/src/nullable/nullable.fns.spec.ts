import { isNil } from "./nullable.fns"

describe("isNilSpecs", () => {
    describe("given the utility is initialized", () => {
        describe("when i call it", () => {
            describe("and the value is `null`", () => {
                it("shoudl be true", () => {
                    expect(isNil(null)).toBe(true);
                });
            })
            describe("and the value is `undefined`", () => {
                it("shoudl be true", () => {
                    expect(isNil(undefined)).toBe(true);
                });
            })
            describe.each([
                ["empty string", ""],
                ["non-empty string", "aa"],
                ["zero", 0],
                ["negative number", -1],
                ["positive number", 1],
                ["negative NaN", -NaN],
                ["positive NaN", NaN],
                ["negative infinity", -Infinity],
                ["positive infinity", Infinity],
                ["false", false],
                ["true", true],
                ["empty object", {}],
                ["non-empty obect", { prop: 1 }],
                ["empty array", []],
                ["non-empty array", [1]]
            ])("and the value is `%s`", (_, value) => {
                it("should be false", () => {
                    expect(isNil(value)).toBe(false);
                })
            })
        })
    })
})
