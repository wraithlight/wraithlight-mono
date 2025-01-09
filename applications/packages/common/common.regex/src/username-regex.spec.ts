import { USERNAME_REGEX } from "./username-regex.const";

describe("UsernameRegexSpecs", () => {
  describe("given the regex is initialized", () => {
    describe("when i test `username1`", () => {
      const name = "username1";
      it("should pass", () => {
        const result = USERNAME_REGEX.test(name);
        expect(result).toBe(true);
        expect(result).toBeTruthy();
      });
    });

    describe("when i test `usern@me1`", () => {
      const name = "usern@me1";
      it("should false", () => {
        const result = USERNAME_REGEX.test(name);
        expect(result).toBe(false);
        expect(result).toBeFalsy();
      })
    });
  });
});
