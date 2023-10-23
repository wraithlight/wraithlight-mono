import { SHA512 } from "@wraithlight/core.crypto";
import { generateRandomString } from "@wraithlight/core.random-string";

jest.mock("@wraithlight/core.random-string", () => {
    return {
        generateRandomString: jest.fn().mockImplementation(() => "wraithlight")
    }
});
jest.mock("@wraithlight/core.crypto", () => {
    return {
        SHA512: jest.fn().mockImplementation(() => "wraithlight")
    }
});

import { PasswordService } from "./password.service";
import { SALT_ALPHABET, SALT_LENGTH } from "./password.const";

describe("PasswordServiceSpecs", () => {

    const MOCK_PASSWORD = "wraithlight";

    let service: PasswordService;

    describe("given the service is initialized", () => {

        service = new PasswordService();

        describe("when i call `encryptPassword`", () => {
            beforeAll(() => {
                service.encryptPassword(MOCK_PASSWORD);
            });
            it("should generate a salt", () => {
                expect(generateRandomString).toHaveBeenCalled();
                expect(generateRandomString).toHaveBeenCalledTimes(1);
                expect(generateRandomString).toHaveBeenCalledWith(
                    SALT_LENGTH,
                    SALT_ALPHABET
                );
            });
            it("should encrypt the password with 512 two times", () => {
                expect(SHA512).toHaveBeenCalled();
                expect(SHA512).toHaveBeenCalledTimes(2);
            });
        });
    });
});
