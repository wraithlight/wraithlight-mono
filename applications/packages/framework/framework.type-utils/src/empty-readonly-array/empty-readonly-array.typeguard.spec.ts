import { isEmptyReadonlyArray } from "./empty-readonly-array.typeguard";

describe("EmptyReadonlyArrayTypeguardSpecs", () => {
  describe("given the typeguard is initialized", () => {
    describe("when i call it", () => {
      describe("with an empty array", () => {
        let result: boolean;
        const MOCK: Array<unknown> = [];
        beforeEach(() => {
          result = isEmptyReadonlyArray(MOCK);
        });
        it("should return true", () => {
          expect(result).toBe(true);
        });
      });
      describe("with a non-empty array", () => {
        let result: boolean;
        const MOCK: Array<unknown> = [1, 2, 3];
        beforeEach(() => {
          result = isEmptyReadonlyArray(MOCK);
        });
        it("should return false", () => {
          expect(result).toBe(false);
        });
      });
      describe("with an empty string", () => {
        let result: boolean;
        const MOCK = "";
        beforeEach(() => {
          result = isEmptyReadonlyArray(MOCK);
        });
        it("should return false", () => {
          expect(result).toBe(false);
        });
      });
      describe("with a non empty string", () => {
        let result: boolean;
        const MOCK = "hrvatska dusu ozdravi";
        beforeEach(() => {
          result = isEmptyReadonlyArray(MOCK);
        });
        it("should return false", () => {
          expect(result).toBe(false);
        });
      });
      describe("with NaN", () => {
        let result: boolean;
        const MOCK = NaN;
        beforeEach(() => {
          result = isEmptyReadonlyArray(MOCK);
        });
        it("should return false", () => {
          expect(result).toBe(false);
        });
      });
      describe("with -Infinity", () => {
        let result: boolean;
        const MOCK = -Infinity;
        beforeEach(() => {
          result = isEmptyReadonlyArray(MOCK);
        });
        it("should return false", () => {
          expect(result).toBe(false);
        });
      });
      describe("with -1", () => {
        let result: boolean;
        const MOCK = -1;
        beforeEach(() => {
          result = isEmptyReadonlyArray(MOCK);
        });
        it("should return false", () => {
          expect(result).toBe(false);
        });
      });
      describe("with zero", () => {
        let result: boolean;
        const MOCK = 0;
        beforeEach(() => {
          result = isEmptyReadonlyArray(MOCK);
        });
        it("should return false", () => {
          expect(result).toBe(false);
        });
      });
      describe("with 1", () => {
        let result: boolean;
        const MOCK = 1;
        beforeEach(() => {
          result = isEmptyReadonlyArray(MOCK);
        });
        it("should return false", () => {
          expect(result).toBe(false);
        });
      });
      describe("with +Infinity", () => {
        let result: boolean;
        const MOCK = Infinity;
        beforeEach(() => {
          result = isEmptyReadonlyArray(MOCK);
        });
        it("should return false", () => {
          expect(result).toBe(false);
        });
      });
      describe("with false", () => {
        let result: boolean;
        const MOCK = false;
        beforeEach(() => {
          result = isEmptyReadonlyArray(MOCK);
        });
        it("should return false", () => {
          expect(result).toBe(false);
        });
      });
      describe("with true", () => {
        let result: boolean;
        const MOCK = true;
        beforeEach(() => {
          result = isEmptyReadonlyArray(MOCK);
        });
        it("should return false", () => {
          expect(result).toBe(false);
        });
      });
      describe("with a Date", () => {
        let result: boolean;
        const MOCK = new Date();
        beforeEach(() => {
          result = isEmptyReadonlyArray(MOCK);
        });
        it("should return false", () => {
          expect(result).toBe(false);
        });
      });
      describe("with a {}", () => {
        let result: boolean;
        const MOCK = {};
        beforeEach(() => {
          result = isEmptyReadonlyArray(MOCK);
        });
        it("should return false", () => {
          expect(result).toBe(false);
        });
      });
    });
  });
});
