import { randomNumberBetween } from "./random-number";

const ONE = 1;
const TEN = 10;

describe("randomNumberSpecs", () => {
  describe("given the function is initialized", () => {
    describe("when calling it with min<max range", () => {
      it("should return a number within the given range", () => {
        const result = randomNumberBetween(ONE, TEN);
        expect(result).toBeLessThanOrEqual(TEN);
        expect(result).toBeGreaterThanOrEqual(ONE);
      });
    });
    describe("when calling it with min=max range", () => {
      it("should return a number what equalis min and max", () => {
        const result = randomNumberBetween(TEN, TEN);
        expect(result).toBe(TEN);
      });
    });
    describe("when calling it with min>max range", () => {
      it("should throw an Error", () => {
        expect(() => randomNumberBetween(TEN, ONE)).toThrow("Minimum value should be bigger than maximum value!");
      });
    });
  });
});