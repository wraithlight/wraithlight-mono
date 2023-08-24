import { LogSeverity } from "@wraithlight/core.logger.types";

export interface CommonServer {
    paths: {
        base: string;
        wildcard: string;
    },
    files: {
        frontend: {
            static: string
        }
    },
    logging: {
        enabledLogSeverities: ReadonlyArray<LogSeverity>
    }
}
