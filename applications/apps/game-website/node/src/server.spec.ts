jest.mock("@wraithlight/core.server", () => {
    return {
        createNodeServer: jest.fn()
    }
});
const serverGameWebsiteConfigReaderGetInstanceSpy = jest.fn();
jest.mock("@wraithlight/common.environment-static.server", () => {
    return {
        ServerGameWebsiteConfigReader: {
            getInstance: serverGameWebsiteConfigReaderGetInstanceSpy.mockImplementation(() => {
                return {
                    getCommon: jest.fn().mockImplementation(() => "test")
                }
            })
        }
    }
});
const sharedGameWebsiteConfigReaderGetInstanceSpy = jest.fn();
const sharedGameWebsiteConfigReaderGetSpy = jest.fn();
jest.mock("@wraithlight/common.environment-static.shared", () => {
    return {
        SharedGameWebsiteConfigReader: {
            getInstance: sharedGameWebsiteConfigReaderGetInstanceSpy.mockImplementation(() => {
                return {
                    get: sharedGameWebsiteConfigReaderGetSpy.mockImplementation(() => 1234)
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
jest.mock("path", () => {
    return {
        join: jest.fn().mockImplementation(() => "")
    }
})

import { ApplicationName } from "@wraithlight/core.common-constants";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { createNodeServer } from "@wraithlight/core.server";

describe("ServerSpecs", () => {
    import("./server");
    describe("given the server has been started", () => {
        it("should reated the port", () => {
            expect(sharedGameWebsiteConfigReaderGetSpy).toHaveBeenCalled();
            expect(sharedGameWebsiteConfigReaderGetSpy).toHaveBeenCalledTimes(1);
        });
        it("should call `createNodeServer`", () => {
            expect(createNodeServer).toHaveBeenCalled();
            expect(createNodeServer).toHaveBeenCalledTimes(1);
            expect(createNodeServer).toHaveBeenCalledWith(
                ApplicationName.GameWebsite,
                [],
                [],
                1234,
                [
                    {
                        path: "test",
                        staticPath: ""
                    },
                    {
                        path: "test",
                        staticPath: ""
                    }
                ]
            )
        });
    });
});
