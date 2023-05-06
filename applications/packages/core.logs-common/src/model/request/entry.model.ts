import { Nullable } from "@wraithlight/core.types";

import { ApplicationName, LogSeverity } from "../../enum";

export interface EntryRequest {
    severity: LogSeverity;
    application: ApplicationName;
    message: string;
    additionalFields: Nullable<string>;
    logDate: Date;
}
