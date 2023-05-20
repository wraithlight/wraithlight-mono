import { LogSeverity } from "../enum/log-severity.enum";

export interface LoggerConfig {
    enabledLogSeverities: ReadonlyArray<LogSeverity>;
}
