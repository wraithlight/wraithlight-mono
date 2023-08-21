import { LogSeverity } from "@wraithlight/core.logger.types";

export interface CommonShared {
    logging: {
        enabledLogSeverities: ReadonlyArray<LogSeverity>
    }
}
