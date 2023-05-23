import { LogSeverity } from "@wraithlight/core.logger.types";

export interface BeaconLogEntry {
    severity: LogSeverity;
    data: string;
}
