import { ClientAccountServiceConfig } from "./account.config";

describe("ClientAccountServiceConfigSpecs", () => {

    const MOCK_API_BASEURL = "http://wraithlight.ai";
    let service: ClientAccountServiceConfig;

    describe("given the service is initialized", () => {
        service = new ClientAccountServiceConfig(MOCK_API_BASEURL);

        describe("when i call `bgetRegisterEndpoint()`", () => {
            let registerV1Endpoint: string;

            beforeEach(() => {
                registerV1Endpoint = service.getRegisterEndpoint();
            });

            it("should return the proper v1 endpoint", () => {
                expect(registerV1Endpoint).toBe(`${MOCK_API_BASEURL}/api/v1/account/register`)
            });

        });
    });

});
