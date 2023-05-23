import { BeaconLoggerService } from "@wraithlight/core.logs.sdk";

export class ClientLoggerService {

    private readonly _beaconLoggerService = new BeaconLoggerService();

    public logDebug(...data: Array<unknown>): void {
        this._beaconLoggerService.logDebug(data);
    }

    public logInfo(...data: Array<unknown>): void {
        this._beaconLoggerService.logInfo(data);
    }

    public logWarning(...data: Array<unknown>): void {
        this._beaconLoggerService.logWarning(data);
    }

    public logError(...data: Array<unknown>): void {
        this._beaconLoggerService.logError(data);
    }

}
