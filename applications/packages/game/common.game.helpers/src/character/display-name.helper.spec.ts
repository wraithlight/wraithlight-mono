import {
  Character,
  CharacterHeadlineColor,
  CharacterTitlePosition
} from "@wraithlight/core.game.types";

import { calculateDisplayName } from "./display-name.helper";

describe("calculateDisplayNameSpecs", () => {
  const MOCK_NAME = "Nevermore";
  const MOCK_TITLE = "the Raven";
  const partialData: Omit<Character, "title"> = {
    name: MOCK_NAME,
    titlePosition: CharacterTitlePosition.AFTER,
    displayName: "",
    label: "<Edgar Alan Poe Fanclub>",
    headlineColor: CharacterHeadlineColor.SELF,
    position: {
      x: 0,
      y: 0
    },
    rotation: 0
  };
  describe("given the utility is initialized", () => {
    describe("when i call it", () => {
      describe("and the DTO has no title", () => {
        let data: Character;
        beforeEach(() => {
          data = {
            ...partialData,
            title: ""
          }
          calculateDisplayName(data);
        });
        it("should return an empty string", () => {
          expect(data.displayName).toBe("");
        });
      });
      describe("and the DTO has BEFORE title", () => {
        let data: Character;
        beforeEach(() => {
          data = {
            ...partialData,
            title: MOCK_TITLE,
            titlePosition: CharacterTitlePosition.BEFORE
          }
          calculateDisplayName(data);
        });
        it("should return an empty string", () => {
          expect(data.displayName).toBe(`${MOCK_TITLE} ${MOCK_NAME}`);
        });
      });
      describe("and the DTO has AFTER title", () => {
        let data: Character;
        beforeEach(() => {
          data = {
            ...partialData,
            title: MOCK_TITLE,
            titlePosition: CharacterTitlePosition.AFTER
          }
          calculateDisplayName(data);
        });
        it("should return an empty string", () => {
          expect(data.displayName).toBe(`${MOCK_NAME} ${MOCK_TITLE}`);
        });
      });
    });
  });
});
