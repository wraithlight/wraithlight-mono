import { ApplicationName } from "@wraithlight/core.common-constants";
import { LogSeverity } from "@wraithlight/core.logger.types";

export interface LogsDbo {
    severity: LogSeverity;
    application: ApplicationName;
    message: string;
    logDate: Date
}
