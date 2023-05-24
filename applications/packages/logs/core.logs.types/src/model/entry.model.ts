import { LogSeverity } from "@wraithlight/core.logger.types";
import { ApplicationName } from "@wraithlight/core.common-constant";

export interface BeaconLogEntry {
    severity: LogSeverity;
    data: string;
    applicationName: ApplicationName;
}
