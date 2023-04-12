import {
    LogSeverity,
    ApplicationName
} from "@wraithlight/core.logs-common";

export interface LogsDbo {
    id: number;
    severity: LogSeverity;
    application: ApplicationName;
    message: string;
    additionalFields?: string;
    logDate: Date
}
