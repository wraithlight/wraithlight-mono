import { L10NService } from "./l10n.service";

describe("L10NService", () => {
    describe("given the service is initialized", () => {
        describe("when i call `getInstance()`", () => {
            describe("without initialization", () => {
                it("should throw an error", () => {
                    expect(() => L10NService.getInstance()).toThrow("The service has not been initialized!");
                });
            });

        });
    });
});
