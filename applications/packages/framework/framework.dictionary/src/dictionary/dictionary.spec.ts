import { Dictionary } from "./dictionary";

describe("DictionarySpecs", () => {

  let dictionary: Dictionary<string>;

  describe("given the dictionary is initialized", () => {
    dictionary = new Dictionary<string>();

    describe("when i call has", () => {
      describe("with an existing key", () => {
        const EXISTING_KEY = "existing-key";
        const MOCK_VALUE = "value";
        beforeEach(() => {
          dictionary.set(EXISTING_KEY, MOCK_VALUE);
        });
        it("should return true", () => {
          expect(dictionary.has(EXISTING_KEY)).toBe(true);
        });
      });
      describe("with a non-existing key", () => {
        const NON_EXISTING_KEY = "non-existing-key";
        it("should return false", () => {
          expect(dictionary.has(NON_EXISTING_KEY)).toBe(false);
        });
      });
    });
  });

});
