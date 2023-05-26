import { ClientAuthService } from "@wraithlight/common.auth-sdk.client";

import { AuthService } from "./auth.service";

const MOCK_USERNAME = "user";
const MOCK_PASSWORD = "pass";
const MOCK_SESSIONT = "sess";

describe("AuthServiceSpecs", () => {

    let service: AuthService;

    const loginSpy = jest.spyOn(ClientAuthService.prototype, "login").mockImplementation();
    const logoutSpy = jest.spyOn(ClientAuthService.prototype, "logout").mockImplementation();
    const renewSpy = jest.spyOn(ClientAuthService.prototype, "keepAliveSession").mockImplementation();

    describe("given the service is initalized", () => {

        service = new AuthService();

        it("should be truthy", () => {
            expect(service).toBeTruthy();
        });

        describe("when the user is trying to log in", () => {
            service.login(MOCK_USERNAME, MOCK_PASSWORD);
            it("should call the sdk", () => {
                expect(loginSpy).toHaveBeenCalledWith(MOCK_USERNAME, MOCK_PASSWORD);
            });
        });

        describe("when the user is trying to log out", () => {
            service.logout(MOCK_SESSIONT);
            it("should call the sdk", () => {
                expect(logoutSpy).toBeCalledWith(MOCK_SESSIONT);
            });
        });

        describe("when the user is trying to renew their session", () => {
            service.keepAlive(MOCK_SESSIONT);
            it("should call the sdk", () => {
                expect(renewSpy).toHaveBeenCalledWith(MOCK_SESSIONT);
            });
        });

    });
});
