const MOCK_UPTIME = "3";

jest.mock("process", () => {
    return {
        uptime: jest.fn().mockImplementation(() => MOCK_UPTIME)
    }
});

import { HCHealthResultV1Model } from "@wraithlight/core.health-checker.types";

import { HealthCheckV1Service } from "./health-checker-v1.service";

describe("HealthCheckV1ServiceSpecs", () => {

    let service: HealthCheckV1Service;
    const MOCK_NAME = "test-app";
    const MOCK_VERSION = "1.0.0";

    describe("given the service is initalized", () => {

        beforeAll(() => {
            service = new HealthCheckV1Service(MOCK_NAME, MOCK_VERSION);
        });

        describe("when i call `getHealth()`", () => {
            let result: HCHealthResultV1Model;

            beforeEach(() => {
                result = service.getHealth();
            });

            it("should return the proper HC result", () => {
                expect(result).toStrictEqual({
                    appName: MOCK_NAME,
                    appVersion: MOCK_VERSION,
                    uptime: MOCK_UPTIME                    
                })
            });

        });
    });
});
