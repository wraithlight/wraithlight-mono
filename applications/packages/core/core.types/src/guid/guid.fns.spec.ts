import { isGuid, newGuid } from "./guid.fns";

describe("guidFnsSpecs", () => {

    describe("given the utility is initialized", () => {
        describe("when i create a new guid", () => {
            const seed = new Array(100).fill(0, 0, 100);
            const guids = seed.map(newGuid);
            it.each(guids)("should be a valid guid", (guid) => {
                expect(isGuid(guid)).toBe(true);
            });
        });
    });

});
