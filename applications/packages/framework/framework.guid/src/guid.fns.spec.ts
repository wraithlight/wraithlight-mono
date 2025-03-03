import { isGuid, newGuid } from "./guid.fns";

describe("guidFnsSpecs", () => {

  describe("given the utility is initialized", () => {
    describe("when i create a new guid", () => {
      const guids = Array.from({ length: 100 }).map(newGuid);
      it.each(guids)("should be a valid guid", (guid) => {
        expect(isGuid(guid)).toBe(true);
      });
    });
  });

});
