import { IpApiClientConfig } from "./ip-api.config";
import { IP_API_BASE_URL, IP_API_PARAMS, IP_API_PATH } from "./ip-api.const";

const baseUrl = IP_API_BASE_URL;
const path = IP_API_PATH;
const params = createIpApiParams();

function createIpApiParams(): string {
    return Object.entries(IP_API_PARAMS).map(m => m.join("=")).join("&");
}

describe("IpApiClientConfigSpecs", () => {

    let service: IpApiClientConfig;
    const MOCK_IP = "192.168.1.1";


    describe("given the service is initialized", () => {

        service = new IpApiClientConfig();

        describe("when i call the `getUrlForIp` endpoint", () => {
            let result: string;
            beforeEach(() => {
                result = service.getUrlForIp(MOCK_IP);
            });
            it("should return the concatenated url", () => {
                expect(result).toStrictEqual(`${baseUrl}${path}/${MOCK_IP}?${params}`)
            });
        });

    });

});
