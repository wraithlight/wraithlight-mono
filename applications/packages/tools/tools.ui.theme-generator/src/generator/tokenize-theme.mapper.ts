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
      },
      surface1: {
        value: theme.colors.surface1,
        token: "wl-colors-surface-1"
      },
      onSurface1: {
        value: theme.colors.onSurface1,
        token: "wl-colors-on-surface-1"
      },
      surface2: {
        value: theme.colors.surface2,
        token: "wl-colors-surface-2"
      },
      onSurface2: {
        value: theme.colors.onSurface2,
        token: "wl-colors-on-surface-2"
      },
      surface3: {
        value: theme.colors.surface3,
        token: "wl-colors-surface-3"
      },
      onSurface3: {
        value: theme.colors.onSurface3,
        token: "wl-colors-on-surface-3"
      },
      surface4: {
        value: theme.colors.surface4,
        token: "wl-colors-surface-4"
      },
      onSurface4: {
        value: theme.colors.onSurface4,
        token: "wl-colors-on-surface-4"
      },
      surface5: {
        value: theme.colors.surface5,
        token: "wl-colors-surface-5"
      },
      onSurface5: {
        value: theme.colors.onSurface5,
        token: "wl-colors-on-surface-5"
      }
    }
  };
};
