import { Theme } from "@wraithlight/core.ui.types";

import { TokenizedTheme } from "./tokenized-theme.type";

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
      },
      success: {
        value: theme.colors.success,
        token: "wl-colors-success"
      },
      onSuccess: {
        value: theme.colors.onSuccess,
        token: "wl-colors-on-success"
      },
      warning: {
        value: theme.colors.warning,
        token: "wl-colors-warning"
      },
      onWarning: {
        value: theme.colors.onWarning,
        token: "wl-colors-on-warning"
      },
      danger: {
        value: theme.colors.danger,
        token: "wl-colors-danger"
      },
      onDanger: {
        value: theme.colors.onDanger,
        token: "wl-colors-on-danger"
      },
      info: {
        value: theme.colors.info,
        token: "wl-colors-info"
      },
      onInfo: {
        value: theme.colors.onInfo,
        token: "wl-colors-on-info"
      }
    }
  };
};
