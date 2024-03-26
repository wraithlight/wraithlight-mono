import { LoggerService as CoreLoggerService } from "@wraithlight/common.logger.sdk";
import { ApplicationName } from "@wraithlight/core.auth.constant";
import { ILogger, LoggerConfig } from "@wraithlight/core.logger.types";
import { BeaconLoggerService } from "@wraithlight/core.logs.sdk";

export class ServerLoggerService {

    private readonly _loggerService: CoreLoggerService;
    private readonly _beaconLoggerService = new BeaconLoggerService();

    constructor(
        private readonly _applicationName: ApplicationName,
        private readonly _loggerConfig: LoggerConfig,
        private readonly _logger: ILogger = console
    ) {
        CoreLoggerService.initialize(
            this._loggerConfig,
            this._logger
        );
        this._loggerService = CoreLoggerService.getInstance();
    }

    public logDebug(...data: Array<unknown>): void {
        this._loggerService.debug(data);
        this._beaconLoggerService.logDebug(
            this._applicationName,
            data
        );
    }

    public logInfo(...data: Array<unknown>): void {
        this._loggerService.info(data);
        this._beaconLoggerService.logInfo(
            this._applicationName,
            data
        );
    }

    public logWarning(...data: Array<unknown>): void {
        this._loggerService.warn(data);
        this._beaconLoggerService.logWarning(
            this._applicationName,
            data
        );
    }

    public logError(...data: Array<unknown>): void {
        this._loggerService.error(data);
        this._beaconLoggerService.logError(
            this._applicationName,
            data
        );
    }

}
