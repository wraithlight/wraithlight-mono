import { isNonEmptyReadonlyArray } from "./non-empty-readonly-array.typeguard";

describe("NonEmptyArrayTypeguardSpecs", () => {
  describe("given the typeguard is initialized", () => {
    describe("when i call it", () => {
      describe("with an empty array", () => {
        let result: boolean;
        const MOCK: Array<unknown> = [];
        beforeEach(() => {
          result = isNonEmptyReadonlyArray(MOCK);
        });
        it("should return false", () => {
          expect(result).toBe(false);
        });
      });
      describe("with a non-empty array", () => {
        let result: boolean;
        const MOCK: Array<unknown> = [1, 2, 3];
        beforeEach(() => {
          result = isNonEmptyReadonlyArray(MOCK);
        });
        it("should return true", () => {
          expect(result).toBe(true);
        });
      });
      describe("with an empty string", () => {
        let result: boolean;
        const MOCK = "";
        beforeEach(() => {
          result = isNonEmptyReadonlyArray(MOCK);
        });
        it("should return false", () => {
          expect(result).toBe(false);
        });
      });
      describe("with a non empty string", () => {
        let result: boolean;
        const MOCK = "hrvatska dusu ozdravi";
        beforeEach(() => {
          result = isNonEmptyReadonlyArray(MOCK);
        });
        it("should return false", () => {
          expect(result).toBe(false);
        });
      });
      describe("with NaN", () => {
        let result: boolean;
        const MOCK = NaN;
        beforeEach(() => {
          result = isNonEmptyReadonlyArray(MOCK);
        });
        it("should return false", () => {
          expect(result).toBe(false);
        });
      });
      describe("with -Infinity", () => {
        let result: boolean;
        const MOCK = -Infinity;
        beforeEach(() => {
          result = isNonEmptyReadonlyArray(MOCK);
        });
        it("should return false", () => {
          expect(result).toBe(false);
        });
      });
      describe("with -1", () => {
        let result: boolean;
        const MOCK = -1;
        beforeEach(() => {
          result = isNonEmptyReadonlyArray(MOCK);
        });
        it("should return false", () => {
          expect(result).toBe(false);
        });
      });
      describe("with zero", () => {
        let result: boolean;
        const MOCK = 0;
        beforeEach(() => {
          result = isNonEmptyReadonlyArray(MOCK);
        });
        it("should return false", () => {
          expect(result).toBe(false);
        });
      });
      describe("with 1", () => {
        let result: boolean;
        const MOCK = 1;
        beforeEach(() => {
          result = isNonEmptyReadonlyArray(MOCK);
        });
        it("should return false", () => {
          expect(result).toBe(false);
        });
      });
      describe("with +Infinity", () => {
        let result: boolean;
        const MOCK = Infinity;
        beforeEach(() => {
          result = isNonEmptyReadonlyArray(MOCK);
        });
        it("should return false", () => {
          expect(result).toBe(false);
        });
      });
      describe("with false", () => {
        let result: boolean;
        const MOCK = false;
        beforeEach(() => {
          result = isNonEmptyReadonlyArray(MOCK);
        });
        it("should return false", () => {
          expect(result).toBe(false);
        });
      });
      describe("with true", () => {
        let result: boolean;
        const MOCK = true;
        beforeEach(() => {
          result = isNonEmptyReadonlyArray(MOCK);
        });
        it("should return false", () => {
          expect(result).toBe(false);
        });
      });
      describe("with a Date", () => {
        let result: boolean;
        const MOCK = new Date();
        beforeEach(() => {
          result = isNonEmptyReadonlyArray(MOCK);
        });
        it("should return false", () => {
          expect(result).toBe(false);
        });
      });
      describe("with a {}", () => {
        let result: boolean;
        const MOCK = {};
        beforeEach(() => {
          result = isNonEmptyReadonlyArray(MOCK);
        });
        it("should return false", () => {
          expect(result).toBe(false);
        });
      });
    });
  });
});
