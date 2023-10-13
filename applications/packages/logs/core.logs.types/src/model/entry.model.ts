import { LogSeverity } from "@wraithlight/core.logger.types";
import { ApplicationName } from "@wraithlight/core.common-constants";

export interface BeaconLogEntry {
    severity: LogSeverity;
    data: string;
    applicationName: ApplicationName;
}
