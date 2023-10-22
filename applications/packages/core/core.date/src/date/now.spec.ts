import { dateNow } from "./now";

describe("dateNowSpecs", () => {
    describe("given the utility is initialized", () => {
        describe("when i call it", () => {
            let now: Date;
            beforeEach(() => {
                now = dateNow();
            });
            it("should return the current value", () => {
                expect(now).toStrictEqual(new Date());
            });
        });
    });
});
