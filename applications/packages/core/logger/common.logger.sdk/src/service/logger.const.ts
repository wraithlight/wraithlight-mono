import { LogSeverity, LoggerConfig } from "@wraithlight/core.logger.types";

export const DEFAULT_CONFIG: LoggerConfig = Object.freeze({
    enabledLogSeverities: [
        LogSeverity.DEBUG,
        LogSeverity.INFO,
        LogSeverity.WARNING,
        LogSeverity.ERROR
    ],
    applicationName: "NO_APPLICATION"
});
