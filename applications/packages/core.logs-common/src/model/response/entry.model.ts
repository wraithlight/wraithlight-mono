import {
    ApplicationName,
    LogSeverity
} from "../../enum";

export interface EntryResponse {
    severity: LogSeverity;
    application: ApplicationName;
    message: string;
    additionalFields?: string;
    logDate: Date;
}
