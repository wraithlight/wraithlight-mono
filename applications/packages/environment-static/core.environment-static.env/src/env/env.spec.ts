const getStringSpy = jest.fn();
const getNumberSpy = jest.fn();

jest.mock("@wraithlight/core.env.sdk", () => {
    return {
        CoreEnvironment: {
            getString: getStringSpy,
            getNumber: getNumberSpy
        }
    }
});

import { EnvironmentStaticEnv } from "./env";

describe("EnvironmentStaticEnvSpecs", () => {
    describe("given the utility is initialized", () => {
        describe("when i try to read a numeric value", () => {
            beforeEach(() => {
                EnvironmentStaticEnv.userManagementDatabasePort();
            });
            it("should call the underlying env reader", () => {
                expect(getNumberSpy).toHaveBeenCalled();
                expect(getNumberSpy).toHaveBeenCalledTimes(1);
                expect(getNumberSpy).toHaveBeenCalledWith("userManagementDbPort", 0);
            });
        });
        describe("when i try to read a string value", () => {
            beforeEach(() => {
                EnvironmentStaticEnv.userManagementDatabaseName();
            });
            it("should call the underlying env reader", () => {
                expect(getStringSpy).toHaveBeenCalled();
                expect(getStringSpy).toHaveBeenCalledTimes(1);
                expect(getStringSpy).toHaveBeenCalledWith("userManagementDbName", "");
            });
        });
    });
});
