import { LogSeverity } from "@wraithlight/core.logger.types"

export interface CommonClient {
    logging: {
        enabledLogSeverities: ReadonlyArray<LogSeverity>
    }
}
