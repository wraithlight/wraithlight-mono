import { predicateDefault } from "./predicate-default.fn";

describe("predicateDefaultSpecs", () => {
  describe("given the utility is initialized", () => {
    describe("when i call it", () => {
      describe("and the property exists", () => {
        const MOCK_VALUE = { prop: 1 };
        const MOCK_DEFAULT_VALUE = 2;
        let result: number | undefined;
        beforeEach(() => {
          result = predicateDefault(MOCK_VALUE, (m) => m.prop, MOCK_DEFAULT_VALUE);
        });
        it("should return the property value", () => {
          expect(result).toBe(MOCK_VALUE.prop);
        })
      })
      describe("and the property not exists", () => {
        const MOCK_VALUE = { prop: undefined };
        const MOCK_DEFAULT_VALUE = 1;
        let result: number | undefined;
        beforeEach(() => {
          result = predicateDefault(MOCK_VALUE, (m) => m.prop, MOCK_DEFAULT_VALUE);
        });
        it("should return the property value", () => {
          expect(result).toBe(MOCK_DEFAULT_VALUE);
        })
      })
    })
  })
})
