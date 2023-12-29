import { dateISOSerialize, dateNow } from "@wraithlight/core.date";
import { ILogger, LogSeverity, LoggerConfig } from "@wraithlight/core.logger.types";
import { Nullable } from "@wraithlight/core.nullable";

import { DEFAULT_CONFIG } from "./logger.const";

export class LoggerService implements ILogger {

    private static _config: Nullable<LoggerConfig>;
    private static _logger: Nullable<ILogger>;
    private static _instance: Nullable<LoggerService>;

    private constructor(
        private readonly _config: LoggerConfig,
        private readonly _logger: ILogger
    ) { }

    public static initialize(
        config?: LoggerConfig,
        logger?: ILogger
    ): void {
        if (this._config || this._logger) {
            throw "LoggerService has been alread initialized!";
        }
        this._config = config;
        this._logger = logger
    }

    public static getInstance(): LoggerService {
        if (!this._instance) {
            this._instance = new LoggerService(
                this._config ?? DEFAULT_CONFIG,
                this._logger ?? console
            );
        }
        return this._instance;
    }

    public debug(...data: Array<unknown>): void {
        this.isSeverityEnabled(LogSeverity.DEBUG) && this.log(LogSeverity.DEBUG, data, this._logger.debug);
    }

    public info(...data: Array<unknown>): void {
        this.isSeverityEnabled(LogSeverity.INFO) && this.log(LogSeverity.INFO, data, this._logger.info);
    }

    public warn(...data: Array<unknown>): void {
        this.isSeverityEnabled(LogSeverity.WARNING) && this.log(LogSeverity.WARNING, data, this._logger.warn);
    }

    public error(...data: Array<unknown>): void {
        this.isSeverityEnabled(LogSeverity.ERROR) && this.log(LogSeverity.ERROR, data, this._logger.error);
    }

    private isSeverityEnabled(severity: LogSeverity): boolean {
        return this._config.enabledLogSeverities.includes(severity);
    }

    private log(
        severity: LogSeverity,
        data: Array<unknown>,
        loggerFn: (message: string) => void
    ): void {
        const sev = `[${severity}]`;
        const time = dateISOSerialize(dateNow());
        const message = data.map(m => {
            if (typeof m === "object") {
                return JSON.stringify(m);
            }
            return m;
        }).join("\n\t");
        const entry = `${time} ${sev} - ${message}`;
        loggerFn(entry);
    }

}
