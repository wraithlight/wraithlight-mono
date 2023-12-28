import { ApplicationName } from "@wraithlight/core.common-constants";
import { HttpBeaconClient } from "@wraithlight/core.http";
import { LogSeverity } from "@wraithlight/core.logger.types";
import { BeaconLogEntry } from "@wraithlight/core.logs.types";

import { LoggerServiceConfig } from "./logger.config";

export class BeaconLoggerService {

    private readonly _config = new LoggerServiceConfig();
    private readonly _beaconService = new HttpBeaconClient();

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
        this._beaconService.beacon(url, entry);
    }

}
