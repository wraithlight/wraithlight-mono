import { ApplicationName, LogSeverity } from "../../enum";

export interface EntryRequest {
    severity: LogSeverity;
    application: ApplicationName;
    message: string;
    additionalFields?: string;
    logDate: Date;
}
