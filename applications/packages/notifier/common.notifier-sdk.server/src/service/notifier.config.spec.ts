import { EnvironmentType } from "@wraithlight/core.common-constants";

const sharedNotifierConfigReaderGetInstanceSpy = jest.fn();
const sharedNotifierConfigReaderGetInstanceGetSpy = jest
    .fn()
    .mockImplementation(() => "test")
;
jest.mock("@wraithlight/common.environment-static.shared", () => {
    return {
        SharedNotifierConfigReader: {
            getInstance: sharedNotifierConfigReaderGetInstanceSpy
                .mockImplementation(() => {
                    return {
                        get: sharedNotifierConfigReaderGetInstanceGetSpy
                    }
                })
        }
    }
});
jest.mock("@wraithlight/core.env", () => {
    return {
        getEnvironmentType: jest
            .fn()
            .mockImplementation(() => EnvironmentType.Dev)
    }
});

import { getEnvironmentType } from "@wraithlight/core.env";
import { NOTIFIER_ENDPOINT_CONST } from "@wraithlight/core.notifier.const";

import { NotifierServiceConfig } from "./notifier.config";

describe("NotifierServiceConfigSpecs", () => {

    const MOCK_BASE_URL = "test";
    const MOCK_PORT = "test";
    const MOCK_ROOT = NOTIFIER_ENDPOINT_CONST.v1.send.root;
    const MOCK_MAIL = NOTIFIER_ENDPOINT_CONST.v1.send.mail;

    let service: NotifierServiceConfig;

    describe("given the service is initialized", () => {

        service = new NotifierServiceConfig();

        it("should get the shared config", () => {
            expect(sharedNotifierConfigReaderGetInstanceSpy).toHaveBeenCalled();
            expect(sharedNotifierConfigReaderGetInstanceSpy).toHaveBeenCalledTimes(1);
            expect(sharedNotifierConfigReaderGetInstanceSpy).toHaveBeenCalledWith(EnvironmentType.Dev);
        });
        it("should read the current environment", () => {
            expect(getEnvironmentType).toHaveBeenCalled();
            expect(getEnvironmentType).toHaveBeenCalledTimes(1);
            expect(getEnvironmentType).toHaveBeenCalledWith();
        });

        describe("when i call `getSendMailV1Url`", () => {

            let result: string;

            beforeAll(() => {
                result = service.getSendMailV1Url();
            });

            it("should read the baseUrl", () => {
                expect(sharedNotifierConfigReaderGetInstanceGetSpy).toHaveBeenCalled();
            });
            it("should read the port", () => {
                expect(sharedNotifierConfigReaderGetInstanceGetSpy).toHaveBeenCalled();
            });
            it("should return a string", () => {
                expect(typeof result).toBe("string");
            });
            it("should return the concetenated string", () => {
                expect(result).toStrictEqual(`${MOCK_BASE_URL}:${MOCK_PORT}${MOCK_ROOT}${MOCK_MAIL}`);
            });
        });
    });
});
