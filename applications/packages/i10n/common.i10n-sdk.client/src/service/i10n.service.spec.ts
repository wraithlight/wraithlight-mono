import { I10NService } from "./i10n.service";

describe("I10NServiceSpecs", () => {
    describe("given the service is initialized", () => {
        describe("when i call `getInstance()`", () => {
            describe("without initialization", () => {
                it("should throw an error", () => {
                    expect(() => I10NService.getInstance()).toThrow("The service has not been initialized!");
                });
            });

        });
    });
});
