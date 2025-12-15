import { Character, CharacterTitlePosition } from "@wraithlight/core.game.types";
import { isEmptyString } from "@wraithlight/framework.nullable";

import { SPACE } from "./display-name.const";

export function calculateDisplayName(character: Character): void {
  if (isEmptyString(character.title)) {
    return;
  }

  if (character.titlePosition === CharacterTitlePosition.AFTER) {
    character.displayName = `${character.name}${SPACE}${character.title}`;
  }

  if (character.titlePosition === CharacterTitlePosition.BEFORE) {
    character.displayName = `${character.title}${SPACE}${character.name}`;
  }
}
