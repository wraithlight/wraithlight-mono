import { Theme } from "@wraithlight/core.ui.types"

import { TokenizedTheme } from "./tokenized-theme.type"
import { tokenizeTheme } from "./tokenize-theme.mapper";

const MOCK_THEME: Theme = {
  colors: {
    primary: "#FFFFFF",
    onPrimary: "#000000",
    success: "#111111",
    onSuccess: "#222222",
    warning: "#333333",
    onWarning: "#444444",
    danger: "#555555",
    onDanger: "#666666",
    info: "#777777",
    onInfo: "#888888"
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
    },
    success: {
      value: "#111111",
      token: "wl-colors-success"
    },
    onSuccess: {
      value: "#222222",
      token: "wl-colors-on-success"
    },
    warning: {
      value: "#333333",
      token: "wl-colors-warning"
    },
    onWarning: {
      value: "#444444",
      token: "wl-colors-on-warning"
    },
    danger: {
      value: "#555555",
      token: "wl-colors-danger"
    },
    onDanger: {
      value: "#666666",
      token: "wl-colors-on-danger"
    },
    info: {
      value: "#777777",
      token: "wl-colors-info"
    },
    onInfo: {
      value: "#888888",
      token: "wl-colors-on-info"
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
