jest.mock("@wraithlight/core.server", () => {
    return {
        createNodeServerV2: jest.fn()
    }
});
jest.mock("./controller", () => {
    return {
        SendControllerV1: jest.fn()
    }
});
jest.mock("@wraithlight/common.auth-sdk.server", () => {
    return {
        ServerAuthControllerV1: jest.fn()
    }
});
const serverNotifierConfigReaderGetInstanceSpy = jest.fn();
jest.mock("@wraithlight/common.environment-static.server", () => {
    return {
        ServerNotifierConfigReader: {
            getInstance: serverNotifierConfigReaderGetInstanceSpy.mockImplementation(() => {
                return {
                    getCommon: jest.fn().mockImplementation(() => "test")
                }
            })
        }
    }
});
const sharedNotifierConfigReaderGetInstanceSpy = jest.fn();
jest.mock("@wraithlight/common.environment-static.shared", () => {
    return {
        SharedNotifierConfigReader: {
            getInstance: sharedNotifierConfigReaderGetInstanceSpy.mockImplementation(() => {
                return {
                    getCommon: jest.fn().mockImplementation(() => "test"),
                    get: jest.fn().mockImplementation(() => "test")
                }
            })
        }
    }
});

import { createNodeServerV2 } from "@wraithlight/core.server";

describe("ServerSpecs", () => {
    import("./server");
    describe("given the server has been started", () => {
        it("should call `createNodeServerV2`", () => {
            expect(createNodeServerV2).toHaveBeenCalled();
            expect(createNodeServerV2).toHaveBeenCalledTimes(1);
        });
    });
});
