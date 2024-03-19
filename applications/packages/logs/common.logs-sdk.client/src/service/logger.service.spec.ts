jest.mock("@wraithlight/core.logs.sdk", () => {
    return {
        BeaconLoggerService: jest.fn().mockImplementation(() => { return { }})
    }
});
import { BeaconLoggerService } from "@wraithlight/core.logs.sdk";
import { ApplicationName } from "@wraithlight/core.auth.constant";

import { ClientLoggerService } from "./logger.service";

describe("ClientLoggerServiceSpecs", () => {

    const MOCK_APP_NAME = ApplicationName.Website;

    let service: ClientLoggerService;

    describe("given the service is initialized", () => {
        service = new ClientLoggerService(MOCK_APP_NAME);

        it("should be truthy", () => {
            expect(service).toBeTruthy();
        });

        it("should initialize the underlying `BeaconLoggerService`", () => {
            expect(BeaconLoggerService).toHaveBeenCalled();
            expect(BeaconLoggerService).toHaveBeenCalledTimes(1);
        });

    });

});
