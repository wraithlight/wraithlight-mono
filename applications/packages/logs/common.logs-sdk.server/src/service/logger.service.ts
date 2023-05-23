import { LoggerService as CoreLoggerService } from "@wraithlight/common.logger.sdk";
import { ILogger, LoggerConfig } from "@wraithlight/core.logger.types";
import { BeaconLoggerService } from "@wraithlight/core.logs.sdk";

export class ServerLoggerService {

    private readonly _loggerService: CoreLoggerService;
    private readonly _beaconLoggerService = new BeaconLoggerService();

    constructor(
        readonly _loggerConfig: LoggerConfig,
        readonly _logger: ILogger
    ) {
        CoreLoggerService.initialize(_loggerConfig);
        this._loggerService = CoreLoggerService.getInstance(_logger);
    }

    public logDebug(...data: Array<unknown>): void {
        this._loggerService.debug(data);
        this._beaconLoggerService.logDebug(data);
    }

    public logInfo(...data: Array<unknown>): void {
        this._loggerService.info(data);
        this._beaconLoggerService.logInfo(data);
    }

    public logWarning(...data: Array<unknown>): void {
        this._loggerService.warn(data);
        this._beaconLoggerService.logWarning(data);
    }

    public logError(...data: Array<unknown>): void {
        this._loggerService.error(data);
        this._beaconLoggerService.logError(data);
    }

}
