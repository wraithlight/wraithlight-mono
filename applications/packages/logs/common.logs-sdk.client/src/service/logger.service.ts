import { ApplicationName } from "@wraithlight/core.common-constant";
import { BeaconLoggerService } from "@wraithlight/core.logs.sdk";

export class ClientLoggerService {

    private readonly _beaconLoggerService = new BeaconLoggerService();

    constructor(
        private readonly _applicationName: ApplicationName
    ) { }

    public logDebug(...data: Array<unknown>): void {
        this._beaconLoggerService.logDebug(this._applicationName, data);
    }

    public logInfo(...data: Array<unknown>): void {
        this._beaconLoggerService.logInfo(this._applicationName, data);
    }

    public logWarning(...data: Array<unknown>): void {
        this._beaconLoggerService.logWarning(this._applicationName, data);
    }

    public logError(...data: Array<unknown>): void {
        this._beaconLoggerService.logError(this._applicationName, data);
    }

}
