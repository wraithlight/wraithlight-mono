import { HealthCheckTokenV1Service } from "./token-v1.service";

jest.mock("@wraithlight/core.crypto", () => {
    return {
        SHA256: jest.fn().mockImplementation(m => m)
    }
});

describe("HealthCheckTokenV1ServiceSpecs", () => {

    const MOCK_TOKEN = "token";

    describe("given the service is initialized", () => {

        let service = new HealthCheckTokenV1Service(MOCK_TOKEN);

        describe("when i call `isTokenValid()`", () => {
            describe("and the token is valid", () => {
                let result: boolean;
                beforeEach(() => {
                    result = service.isTokenValid(MOCK_TOKEN);
                });
                it("should return `true`", () => {
                    expect(result).toBe(true);
                });
            });
            describe("and the token is invalid", () => {
                let result: boolean;
                beforeEach(() => {
                    result = service.isTokenValid("MOCK_TOKEN");
                });
                it("should return `false`", () => {
                    expect(result).toBe(false);
                });
            });
        });
    });
});
