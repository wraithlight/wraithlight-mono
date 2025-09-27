import { noop } from "./noop";

describe("NoopSpecs", () => {
  describe("given the utility is initialized", () => {
    describe("when i call it", () => {
      it("should not to throw an error", () => {
        expect(() => noop()).not.toThrow();
      });
      it("should return undefined", () => {
      expect(noop()).toBeUndefined();
      });
    });
  });
});
