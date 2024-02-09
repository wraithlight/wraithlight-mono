jest.mock("@wraithlight/core.server", () => {
    return {
        createNodeServer: jest.fn()
    }
});
jest.mock("./controller", () => {
    return {
        LogController: jest.fn(),
        ApplicationController: jest.fn(),
        TokenController: jest.fn()
    }
});
jest.mock("@wraithlight/common.auth-sdk.server", () => {
    return {
        ServerAuthControllerV1: jest.fn()
    }
});
import { createNodeServer } from "@wraithlight/core.server";

describe("ServerSpecs", () => {
    import("./server");
    describe("given the server has been started", () => {
        it("should call `createNodeServer`", () => {
            expect(createNodeServer).toHaveBeenCalled();
            expect(createNodeServer).toHaveBeenCalledTimes(1);
        });
    });
});
