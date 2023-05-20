import { LogSeverity } from "../enum";

export interface LoggerConfig {
    enabledLogSeverities: ReadonlyArray<LogSeverity>;
}
