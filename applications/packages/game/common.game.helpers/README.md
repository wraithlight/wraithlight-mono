## common.game.helpers

**Exports:**
* `calculateDisplayName(character: Character): void` - It modifies the argument and populates the `title` property based on the `title`, `name` and `titlePosition` properties' values.

**Usage:**

***calculateDisplayName***
```ts

import { calculateDisplayName } from "@wraithlight/common.game.helpers";

const character: Character = {
    name: "Nevermore",
    titlePosition: CharacterTitlePosition.AFTER,
    displayName: "",
    label: "<Edgar Alan Poe Fanclub>",
    headlineColor: CharacterHeadlineColor.SELF,
    position: {
      x: 0,
      y: 0
    },
    rotation: 0,
    title: "the Raven"
};

calculateDisplayName(character);
console.log(character.title);     // Nevermore the Raven

```