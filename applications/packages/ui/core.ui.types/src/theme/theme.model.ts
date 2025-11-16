import { ThemeColors } from "./theme-color.model";

export interface Theme {
  colors: ThemeColors;
}

export interface TenantTheme {
  lightMode: Theme;
  darkMode: Theme;
}
