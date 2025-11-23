import { Theme } from "@wraithlight/core.ui.types"

import { TokenizedTheme } from "./tokenized-theme.type"
import { tokenizeTheme } from "./tokenize-theme.mapper";

const MOCK_THEME: Theme = {
  colors: {
    primary: "#000001",
    onPrimary: "#000002",
    success: "#000003",
    onSuccess: "#000004",
    warning: "#000005",
    onWarning: "#000006",
    danger: "#000007",
    onDanger: "#000008",
    info: "#000009",
    onInfo: "#00000A",
    surface1: "#00000B",
    onSurface1: "#00000C",
    surface2: "#00000D",
    onSurface2: "#00000E",
    surface3: "#00000F",
    onSurface3: "#000010",
    surface4: "#000011",
    onSurface4: "#000012",
    surface5: "#000013",
    onSurface5: "#000014",
  }
};

const MOCK_TOKENIZED_THEME: TokenizedTheme = {
  colors: {
    primary: {
      value: "#000001",
      token: "wl-colors-primary"
    },
    onPrimary: {
      value: "#000002",
      token: "wl-colors-on-primary"
    },
    success: {
      value: "#000003",
      token: "wl-colors-success"
    },
    onSuccess: {
      value: "#000004",
      token: "wl-colors-on-success"
    },
    warning: {
      value: "#000005",
      token: "wl-colors-warning"
    },
    onWarning: {
      value: "#000006",
      token: "wl-colors-on-warning"
    },
    danger: {
      value: "#000007",
      token: "wl-colors-danger"
    },
    onDanger: {
      value: "#000008",
      token: "wl-colors-on-danger"
    },
    info: {
      value: "#000009",
      token: "wl-colors-info"
    },
    onInfo: {
      value: "#00000A",
      token: "wl-colors-on-info"
    },
    surface1: {
      value: "#00000B",
      token: "wl-colors-surface-1"
    },
    onSurface1: {
      value: "#00000C",
      token: "wl-colors-on-surface-1"
    },
    surface2: {
      value: "#00000D",
      token: "wl-colors-surface-2"
    },
    onSurface2: {
      value: "#00000E",
      token: "wl-colors-on-surface-2"
    },
    surface3: {
      value: "#00000F",
      token: "wl-colors-surface-3"
    },
    onSurface3: {
      value: "#000010",
      token: "wl-colors-on-surface-3"
    },
    surface4: {
      value: "#000011",
      token: "wl-colors-surface-4"
    },
    onSurface4: {
      value: "#000012",
      token: "wl-colors-on-surface-4"
    },
    surface5: {
      value: "#000013",
      token: "wl-colors-surface-5"
    },
    onSurface5: {
      value: "#000014",
      token: "wl-colors-on-surface-5"
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
