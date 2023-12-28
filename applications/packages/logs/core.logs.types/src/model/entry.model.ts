import { ApplicationName } from "@wraithlight/core.common-constants";
import { LogSeverity } from "@wraithlight/core.logger.types";

export interface BeaconLogEntry {
    severity: LogSeverity;
    data: string;
    applicationName: ApplicationName;
}
