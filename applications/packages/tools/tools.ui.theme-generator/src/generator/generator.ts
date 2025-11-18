import { Theme } from "@wraithlight/core.ui.types";
import { EOL } from "os";

import { tokenizeTheme } from "./tokenize-theme.mapper";

export const tenantThemeGenerator = (
  theme: Theme
): string => {
  const tokenizedTheme = tokenizeTheme(theme);
  const cssLineColors = Object.entries(tokenizedTheme.colors)
    .map(m => `  --${m[1].token}: ${m[1].value};`)
    .join(EOL)
  ;

  const css = [
    `:root {`,
    cssLineColors,
    "}",
  ].join(EOL);

  return css;
}
