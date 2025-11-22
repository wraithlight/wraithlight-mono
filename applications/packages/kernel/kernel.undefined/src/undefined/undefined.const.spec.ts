import { GLOBAL_UNDEFINED } from "./undefined.const";

describe("GLOBAL_UNDEFINEDSpecs", () => {
    describe("given the const is initialized", () => {
        it("should be undefined", () => {
            expect(GLOBAL_UNDEFINED).toBeFalsy();
            expect(GLOBAL_UNDEFINED).toBeUndefined();
            expect(GLOBAL_UNDEFINED).toBe(undefined);
        });
    });
});
