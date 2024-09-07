import {
  CharacterHeadlineColor,
  CharacterTitlePosition
} from "../enum";

import { Position } from "./position.model";

export interface Character {
  name: string;
  title: string;
  titlePosition: CharacterTitlePosition;
  displayName: string;
  label: string;
  headlineColor: CharacterHeadlineColor;
  position: Position;
  rotation: number;
}
