import { Theme } from "@wraithlight/core.ui.types"

import { TokenizedTheme } from "./tokenized-theme.type"
import { tokenizeTheme } from "./tokenize-theme.mapper";

const MOCK_THEME: Theme = {
  colors: {
    primary: "#FFFFFF",
    onPrimary: "#000000"
  }
};

const MOCK_TOKENIZED_THEME: TokenizedTheme = {
  colors: {
    primary: {
      value: "#FFFFFF",
      token: "wl-colors-primary"
    },
    onPrimary: {
      value: "#000000",
      token: "wl-colors-on-primary"
    }
  }
};

describe("tokenizeThemeSpecs", () => {
  describe("given the mapper is initialized", () => {
    describe("when i call it", () => {
      let result: TokenizedTheme;

      beforeEach(() => {
        result = tokenizeTheme(MOCK_THEME);
      });
      it("must return the tokenized theme", () => {
        expect(result).toStrictEqual(MOCK_TOKENIZED_THEME);
      });
    });
  });
});
