import { Nullable, utcNow } from "@wraithlight/core.types";
import { HttpClient } from "@wraithlight/core.http";
import { ApplicationName, EntryRequest, LogSeverity } from "@wraithlight/core.logs-common";

import { LogsClientConfig } from "./logs.config";

export class LogsService {

    private readonly _httpClient = new HttpClient();
    private readonly _config = new LogsClientConfig();

    public async logInfo(
        application: ApplicationName,
        message: string,
        additionalFields?: unknown
    ): Promise<void> {
        this.log(LogSeverity.Info, application, message, additionalFields);
    }

    public async logWarning(
        application: ApplicationName,
        message: string,
        additionalFields?: unknown
    ): Promise<void> {
        this.log(LogSeverity.Warning, application, message, additionalFields);
    }

    public async logError(
        application: ApplicationName,
        message: string,
        additionalFields?: unknown
    ): Promise<void> {
        this.log(LogSeverity.Error, application, message, additionalFields);
    }

    private async log(
        severity: LogSeverity,
        application: ApplicationName,
        message: string,
        additionalFields?: unknown
    ): Promise<void> {
        const entry = this.createLogEntry(severity, application, message, additionalFields);
        const url = this._config.getEntryAddUrl();
        await this._httpClient.post(url, entry);
    }

    private createLogEntry(
        severity: LogSeverity,
        application: ApplicationName,
        message: string,
        additionalFields?: unknown
    ): EntryRequest {
        return {
            severity: severity,
            application: application,
            message: message,
            additionalFields: this.getAdditionalFieldsString(additionalFields),
            logDate: utcNow()
        };
    }

    private getAdditionalFieldsString(additionalFields?: unknown): Nullable<string> {
        if (!additionalFields) {
            return undefined;
        }
        if (typeof additionalFields === "string") {
            return additionalFields;
        }
        return JSON.stringify(additionalFields);
    }

}
