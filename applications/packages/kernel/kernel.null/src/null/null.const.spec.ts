import { GLOBAL_NULL } from "./null.const";

describe("GLOBAL_NULLSPecs", () => {
  describe("given the const is initialized", () => {
    it("should be null", () => {
      expect(GLOBAL_NULL).toBeFalsy();
      expect(GLOBAL_NULL).toBeNull();
      expect(GLOBAL_NULL).toBe(null);
    });
  });
});
