jest.mock("@wraithlight/common.environment-static.shared", () => {
    return {
        SharedLogsConfigReader: {
            getInstance: jest.fn().mockImplementation(() => {
                return {
                    get: jest.fn().mockImplementation(() => "test")
                }
             })
        }
    }
});

import { LoggerServiceConfig } from "./logger.config";

describe("LoggerServiceConfigSpecs", () => {

    let service: LoggerServiceConfig;

    describe("given the service is initialized", () => {
        service = new LoggerServiceConfig();

        describe("when i call `getLogUrl()`", () => {
            let loginV1Endpoint: string;

            beforeEach(() => {
                loginV1Endpoint = service.getLogUrl();
            });

            it("should return the proper v1 endpoint", () => {
                expect(loginV1Endpoint).toBe(`test:test/api/v1/logs/create`);
            });

        });
    });

});
