jest.mock("bcrypt", () => {
    return {
        genSaltSync: jest.fn(),
        hashSync: jest.fn(),
        compareSync: jest.fn()
    }
});

import {
    genSaltSync,
    hashSync,
    compareSync
} from "bcryptjs"

import { Bcrypt } from "./bcrypt";

const MOCK_ROUNDS = 15
const MOCK_PASSWORD = "password"
const MOCK_SALT = "salt"
const MOCK_VERIFY_PASSWORD = "password"
const MOCK_VERIFY_HASH = "hash"

describe("BcryptSpecs", () => {

    describe("given the utility is initialized", () => {
        describe("when i call", () => {
            describe("generateHashSync", () => {
                beforeEach(() => {
                    Bcrypt.generateHashSync(MOCK_ROUNDS)
                })
                it("should call the underlying method", () => {
                    expect(genSaltSync).toHaveBeenCalled();
                    expect(genSaltSync).toHaveBeenCalledTimes(1);
                    expect(genSaltSync).toHaveBeenCalledWith(MOCK_ROUNDS);
                })
            });

            describe("encryptPasswordWithSaltSync", () => {
                beforeEach(() => {
                    Bcrypt.encryptPasswordWithSaltSync(MOCK_PASSWORD, MOCK_SALT)
                })
                it("should call the underlying method", () => {
                    expect(hashSync).toHaveBeenCalled();
                    expect(hashSync).toHaveBeenCalledTimes(1);
                    expect(hashSync).toHaveBeenCalledWith(MOCK_PASSWORD, MOCK_SALT);
                })
            });

            describe("verifyPasswordSync", () => {
                beforeEach(() => {
                    Bcrypt.verifyPasswordSync(
                        MOCK_VERIFY_PASSWORD,
                        MOCK_VERIFY_HASH
                    )
                })
                it("should call the underlying method", () => {
                    expect(compareSync).toHaveBeenCalled();
                    expect(compareSync).toHaveBeenCalledTimes(1);
                    expect(compareSync).toHaveBeenCalledWith(MOCK_VERIFY_PASSWORD, MOCK_VERIFY_HASH);
                })
            });

        });
    });

});
