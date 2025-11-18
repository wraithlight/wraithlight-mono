import { Theme } from "@wraithlight/core.ui.types"

import { TokenizedTheme } from "./tokenized-theme.type"

export const tokenizeTheme = (theme: Theme): TokenizedTheme => {
  return {
    colors: {
      primary: {
        value: theme.colors.primary,
        token: "wl-colors-primary"
      },
      onPrimary: {
        value: theme.colors.onPrimary,
        token: "wl-colors-on-primary"
      }
    }
  }
}
