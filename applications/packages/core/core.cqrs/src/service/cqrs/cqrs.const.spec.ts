import { CQRS_PROCESSOR_TIMEOUT } from "./cqrs.const";

describe("CqrsConstSpecs", () => {
    describe("given the constants are initialized", () => {
        describe("when checking them", () => {
            it.each([
                [ CQRS_PROCESSOR_TIMEOUT, 1000 ]
            ])("they all should have the correct value", (current, expected) => {
                expect(current).toBe(expected);
            });
        });
    });
});
