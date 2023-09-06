import { randomNumberBetween } from "./random-number";

describe("randomNumberSpecs", () => {
    describe("given the function is initialized", () => {
        describe("when calling it with min<max range", () => {
            it("should return a number within the given range", () => {
                const result = randomNumberBetween(1, 10);
                expect(result).toBeLessThanOrEqual(10);
                expect(result).toBeGreaterThanOrEqual(1);
            });
        });
        describe("when calling it with min=max range", () => {
            it("should return a number what equalis min and max", () => {
                const result = randomNumberBetween(10, 10);
                expect(result).toBe(10);
            });
        });
        describe("when calling it with min>max range", () => {
            it("should throw an Error", () => {
                expect(() => randomNumberBetween(10, 1)).toThrow("Minimum value should be bigger than maximum value!");
            });
        });
    });
});