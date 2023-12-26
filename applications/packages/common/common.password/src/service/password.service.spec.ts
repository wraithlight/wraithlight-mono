jest.mock("@wraithlight/facade.bcrypt", () => {
    return {
        Bcrypt: {
            encryptPasswordWithSaltSync: jest.fn()
        }
    }
});

import { Bcrypt } from "@wraithlight/facade.bcrypt";

import { PasswordService } from "./password.service";

describe("PasswordServiceSpecs", () => {

    const MOCK_PASSWORD = "wraithlight";
    const MOCK_SALT = "salt"

    let service: PasswordService;

    describe("given the service is initialized", () => {

        service = new PasswordService();

        describe("when i call `encryptPassword`", () => {
            beforeAll(() => {
                service.encryptPassword(MOCK_PASSWORD, MOCK_SALT);
            });
            it("should encrypt the password with bcrypt", () => {
                expect(Bcrypt.encryptPasswordWithSaltSync).toHaveBeenCalled()
                expect(Bcrypt.encryptPasswordWithSaltSync).toHaveBeenCalledTimes(1)
                expect(Bcrypt.encryptPasswordWithSaltSync).toHaveBeenCalledWith(MOCK_PASSWORD, MOCK_SALT)
            });
        });
    });
});
