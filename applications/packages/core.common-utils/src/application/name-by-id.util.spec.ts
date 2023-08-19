import { ApplicationId, ApplicationName } from "@wraithlight/core.common-constant";
import { applicationNameById } from "./name-by-id.util";

describe("applicationNameByIdSpecs", () => {
    describe("given the utility function is initialized", () => {
        describe("when i call it with a proper application name", () => {
            it("should return the GUID for it", () => {
                expect(applicationNameById(ApplicationId.WEBSITE)).toBe(ApplicationName.Website);
            });
        });
        describe("when i call it with an empty id", () => {
            it("should throw an error", () => {
                expect(() => applicationNameById("")).toThrow(`Application with id '' was not found!`);
            });
        });
    });
});
