import { getNavigatorRef } from "@wraithlight/core.dom";
import { LogSeverity } from "@wraithlight/core.logger.types";
import { BeaconLogEntry } from "@wraithlight/core.logs.types";

import { LoggerServiceConfig } from "./logger.config";
import { ApplicationName } from "@wraithlight/core.common-constant";

export class BeaconLoggerService {

    private readonly _navigator = getNavigatorRef();
    private readonly _config = new LoggerServiceConfig();

    public logDebug(
        applicationName: ApplicationName,
        ...data: Array<unknown>
    ): void {
        this.log(applicationName, LogSeverity.DEBUG, data);
    }

    public logInfo(
        applicationName: ApplicationName,
        ...data: Array<unknown>
    ): void {
        this.log(applicationName, LogSeverity.INFO, data);
    }

    public logWarning(
        applicationName: ApplicationName,
        ...data: Array<unknown>
    ): void {
        this.log(applicationName, LogSeverity.WARNING, data);
    }

    public logError(
        applicationName: ApplicationName,
        ...data: Array<unknown>
    ): void {
        this.log(applicationName, LogSeverity.ERROR, data);
    }

    private log(
        applicationName: ApplicationName,
        severity: LogSeverity,
        ...data: Array<unknown>
    ): void {
        const entry: BeaconLogEntry = {
            severity,
            applicationName,
            data: JSON.stringify(data.map(m => typeof m === "object" ? JSON.stringify(m) : m))
        };
        const url = this._config.getLogUrl();
        this._navigator.sendBeacon(url, JSON.stringify(entry));
    }

}
