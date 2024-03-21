const clientCtorSpy = jest.fn();

jest.mock("../client", () => {
    return {
        HealthCheckClient: clientCtorSpy
    }
});

import { HealthCheckService } from "./health-check.service";

describe("HealthCheckServiceSpecs", () => {

    let service: HealthCheckService;
    const MOCK_BASEURL = "base-url";
    const MOCK_TOKEN = "token";

    describe("given the service is initialized", () => {
        beforeAll(() => {
            service = new HealthCheckService(MOCK_BASEURL, MOCK_TOKEN);
        });
        it("should create a client isntance", () => {
            expect(clientCtorSpy).toHaveBeenCalled();
            expect(clientCtorSpy).toHaveBeenCalledTimes(1);
            expect(clientCtorSpy).toHaveBeenCalledWith(MOCK_BASEURL);
        });
    });
});
