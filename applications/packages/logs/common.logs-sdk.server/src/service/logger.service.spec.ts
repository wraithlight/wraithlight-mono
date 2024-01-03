jest.mock("@wraithlight/common.logger.sdk", () => {
    return {
        LoggerService: {
            initialize: jest.fn(),
            getInstance: jest.fn()
        }
    }
});
jest.mock("@wraithlight/core.logs.sdk", () => {
    return {
        BeaconLoggerService: jest.fn().mockImplementation(() => { return { }})
    }
});
import { ApplicationName } from "@wraithlight/core.common-constants";
import { LoggerService as CoreLoggerService } from "@wraithlight/common.logger.sdk";
import { ILogger, LoggerConfig } from "@wraithlight/core.logger.types";

import { ServerLoggerService } from "./logger.service";

describe("ServerLoggerService", () => {

    const MOCK_APP_NAME = ApplicationName.Website;
    const MOCK_LOGGER_CONFIG: LoggerConfig = Object.freeze({
        enabledLogSeverities: []
    });
    const MOCK_LOGGER: ILogger = {
        debug: jest.fn(),
        info: jest.fn(),
        warn: jest.fn(),
        error: jest.fn()
    };
    const coreLoggerInitializeSpy = jest.spyOn(CoreLoggerService, "initialize");
    const coreLoggerGetInstanceSpy = jest.spyOn(CoreLoggerService, "getInstance");
    let service: ServerLoggerService;

    describe("given the service is initialized", () => {
        service = new ServerLoggerService(
            MOCK_APP_NAME,
            MOCK_LOGGER_CONFIG,
            MOCK_LOGGER
        );

        it("should be truthy", () => {
            expect(service).toBeTruthy();
        });

        it("should initialize the underlying `LoggerService`", () => {
            expect(coreLoggerInitializeSpy).toHaveBeenCalled();
            expect(coreLoggerInitializeSpy).toHaveBeenCalledTimes(1);
            expect(coreLoggerInitializeSpy)
                .toHaveBeenCalledWith(MOCK_LOGGER_CONFIG, MOCK_LOGGER);
        });

        it("should get the instance of the underlying `LoggerService`", () => {
            expect(coreLoggerGetInstanceSpy).toHaveBeenCalled();
            expect(coreLoggerGetInstanceSpy).toHaveBeenCalledTimes(1);
            expect(coreLoggerGetInstanceSpy).toHaveBeenCalledWith();
        });

    });

});
