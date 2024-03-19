import { createUrl } from "@wraithlight/core.url";
import { EnvironmentType } from "@wraithlight/core.env.types";

const sharedNotifierConfigReaderGetInstanceSpy = jest.fn();
const sharedNotifierConfigReaderGetInstanceGetSpy = jest
    .fn()
    .mockImplementationOnce(() => "test")
    .mockImplementationOnce(() => 1234)
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
jest.mock("@wraithlight/core.env.sdk", () => {
    return {
        CoreEnvironment: {
            getEnvironmentType: jest
            .fn()
            .mockImplementation(() => EnvironmentType.Dev)
        }
    }
});

import { CoreEnvironment } from "@wraithlight/core.env.sdk";
import { NOTIFIER_ENDPOINT_CONST } from "@wraithlight/core.notifier.const";

import { NotifierServiceConfig } from "./notifier.config";

describe("NotifierServiceConfigSpecs", () => {

    const MOCK_BASE_URL = "test";
    const MOCK_PORT = 1234;
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
            expect(CoreEnvironment.getEnvironmentType).toHaveBeenCalled();
            expect(CoreEnvironment.getEnvironmentType).toHaveBeenCalledTimes(1);
            expect(CoreEnvironment.getEnvironmentType).toHaveBeenCalledWith();
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
                expect(result).toStrictEqual(`${createUrl(MOCK_BASE_URL, MOCK_PORT)}${MOCK_ROOT}${MOCK_MAIL}`);
            });
        });
    });
});
