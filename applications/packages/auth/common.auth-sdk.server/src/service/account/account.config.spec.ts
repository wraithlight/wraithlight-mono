jest.mock("@wraithlight/common.environment-static.shared", () => {
    return {
        SharedUserManagementConfigReader: {
            getInstance: jest.fn().mockImplementation(() => { 
                return {
                    get: jest.fn().mockImplementation(() => "test")
                }
             })
        }
    }
});

import { ServerAccountServiceConfig } from "./account.config";

describe("ServerAccountServiceConfigSpecs", () => {

    let service: ServerAccountServiceConfig;

    describe("given the service is initialized", () => {
        service = new ServerAccountServiceConfig();

        describe("when i call `getRegisterUrl()`", () => {
            let loginV1Endpoint: string;

            beforeEach(() => {
                loginV1Endpoint = service.getRegisterUrl();
            });

            it("should return the proper v1 endpoint", () => {
                expect(loginV1Endpoint).toBe(`test:test/api/external/v2/account/register`);
            });

        });
    });

});
