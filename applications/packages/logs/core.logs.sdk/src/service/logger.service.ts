import { getNavigatorRef } from "@wraithlight/core.dom";
import { LogSeverity } from "@wraithlight/core.logger.types";
import { BeaconLogEntry } from "@wraithlight/core.logs.types";

import { LoggerServiceConfig } from "./logger.config";

export class BeaconLoggerService {

    private readonly _navigator = getNavigatorRef();
    private readonly _config = new LoggerServiceConfig();

    public logDebug(...data: Array<unknown>): void {
        this.log(LogSeverity.DEBUG, data);
    }

    public logInfo(...data: Array<unknown>): void {
        this.log(LogSeverity.INFO, data);
    }

    public logWarning(...data: Array<unknown>): void {
        this.log(LogSeverity.WARNING, data);
    }

    public logError(...data: Array<unknown>): void {
        this.log(LogSeverity.ERROR, data);
    }

    private log(severity: LogSeverity, ...data: Array<unknown>): void {
        const entry: BeaconLogEntry = {
            severity,
            data: JSON.stringify(data.map(m => typeof m === "object" ? JSON.stringify(m) : m))
        };
        const url = this._config.getLogUrl();
        this._navigator.sendBeacon(url, JSON.stringify(entry));
    }

}
