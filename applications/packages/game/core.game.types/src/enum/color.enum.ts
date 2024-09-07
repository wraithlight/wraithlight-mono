import {
  CoreColorBlue,
  CoreColorGray,
  CoreColorGreen,
  CoreColorRed,
  CoreColorYellow
} from "./core-color.enum";

export const enum Color {
  /**
  * In memoriam G - never forget!
  * https://github.com/wraithlight/wraithlight-mono/commit/09bfc23435b10cbbb53126c7ee1819a86e93f627#diff-08d5b4a14934000386b15b1f1ba6fe5f1146a8fa789bad162f8e18172e241342
  */
  MISSING_TEXTURE = "#FFFF8F",
  CHARACTER_HEADLINE_SELF = CoreColorBlue._050,
  CHARACTER_HEADLINE_ALLY = CoreColorGreen._050,
  CHARACTER_HEADLINE_NEUTRAL = CoreColorYellow._050,
  CHARACTER_HEADLINE_ENEMY = CoreColorRed._050,
  CHARACTER_HEADLINE_UNALIVE = CoreColorGray._050
}
