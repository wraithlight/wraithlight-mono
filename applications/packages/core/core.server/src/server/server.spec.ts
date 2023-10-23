const MOCK_SERVER_APP = {};
const MOCK_START = jest.fn();
jest.mock("@wraithlight/core.node", () => {
    return {
        ControllerBinder: {
            bindControllers: jest.fn()
        },
        createServer: jest.fn().mockImplementation(() => {
            return {
                getApp: jest.fn().mockImplementation(() => MOCK_SERVER_APP),
                start: MOCK_START
            }
        })
    }
});
jest.mock("@wraithlight/common.logger.sdk", () => {
    return {
        LoggerService: {
            getInstance: jest.fn(),
            info: jest.fn()
        }
    }
});

import {
    BaseController,
    ControllerBinder,
    createServer
} from "@wraithlight/core.node";
import { ApplicationName } from "@wraithlight/core.common-constants";
import { LoggerService } from "@wraithlight/common.logger.sdk";


import { createNodeServer } from "./server";

describe("ServerSpecs", () => {

    const MOCK_APP_NAME = ApplicationName.Website;
    const MOCK_CONTROLLERS: ReadonlyArray<BaseController> = [];
    const MOCK_PORT = 666;

    describe("given the utility function is ready", () => {

        describe("when i call it", () => {

            createNodeServer(MOCK_APP_NAME, MOCK_CONTROLLERS, MOCK_PORT);

            it("should call `createServer`", () => {
                expect(createServer).toHaveBeenCalled();
                expect(createServer).toHaveBeenCalledTimes(1);
            });

            it("should call `createServer` with enabled cors", () => {
                expect(createServer).toHaveBeenCalledTimes(1);
                expect(createServer).toHaveBeenCalledWith(true);
            });

            it("should call get the logger instance", () => {
                expect(LoggerService.getInstance).toHaveBeenCalled();
                expect(LoggerService.getInstance).toHaveBeenCalledTimes(1);
            });

            it("should bind the specified controllers", () => {
                expect(ControllerBinder.bindControllers).toHaveBeenCalled();
                expect(ControllerBinder.bindControllers).toHaveBeenCalledTimes(1);
                expect(ControllerBinder.bindControllers).toHaveBeenCalledWith(MOCK_SERVER_APP, MOCK_CONTROLLERS);
            });

            it("should start the server", () => {
                expect(MOCK_START).toHaveBeenCalled();
                expect(MOCK_START).toHaveBeenCalledTimes(1);
            });

        });

    });

});
