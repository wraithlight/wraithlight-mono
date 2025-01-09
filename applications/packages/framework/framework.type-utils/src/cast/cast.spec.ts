import { cast } from "./cast.fn";

describe("CastSpecs", () => {

  const MOCK: unknown = 5;

  describe("given the utility is initalized", () => {
    describe("when i call `cast()`", () => {
      let result: number;
      beforeEach(() => {
        result = cast<number>(MOCK);
      });
      it("should retun the proper type", () => {
        expect(typeof result).toBe("number");
      })
    });
  });
});
