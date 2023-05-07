import { Nullable, dateISOSerialize, dateNow } from "@wraithlight/core.types";

import { ILogger, LogSeverity } from "./logger.model";

export class LoggerService implements ILogger {

    private static _instance: Nullable<LoggerService>;

    private constructor(
        private readonly _logger: ILogger = console
    ) { }

    public static getInstance(logger?: ILogger): LoggerService {
        if (!this._instance) {
            this._instance = new LoggerService(logger);
        }
        return this._instance;
    }

    public debug(...data: Array<unknown>): void {
        this.log("DBG", data, this._logger.debug);
    }

    public info(...data: Array<unknown>): void {
        this.log("INF", data, this._logger.info);
    }

    public warn(...data: Array<unknown>): void {
        this.log("WRN", data, this._logger.warn);
    }

    public error(...data: Array<unknown>): void {
        this.log("ERR", data, this._logger.error);
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
