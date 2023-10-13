import { LogSeverity } from "@wraithlight/core.logger.types";
import { ApplicationName } from "@wraithlight/core.common-constants";

export interface LogsDbo {
    severity: LogSeverity;
    application: ApplicationName;
    message: string;
    logDate: Date
}
