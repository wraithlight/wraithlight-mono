import { LogSeverity } from "../enum";

/**
 * @deprecated - Do not use this.
 */
export interface LoggerConfig {
    enabledLogSeverities: ReadonlyArray<LogSeverity>;
    applicationName: string;
}
