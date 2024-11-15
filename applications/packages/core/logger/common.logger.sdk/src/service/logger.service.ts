import { dateISOSerialize, dateNow } from "@wraithlight/core.date";
import { ILogger, LogSeverity, LoggerConfig } from "@wraithlight/core.logger.types";
import { Nullable } from "@wraithlight/core.nullable";
import { blue, red, yellow } from "ansi-colors";

import { DEFAULT_CONFIG } from "./logger.const";

export class LoggerService implements ILogger {

  private static _config: Nullable<Partial<LoggerConfig>>;
  private static _logger: Nullable<ILogger>;
  private static _instance: Nullable<LoggerService>;

  private constructor(
    private readonly _config: Partial<LoggerConfig>,
    private readonly _logger: ILogger
  ) { }

  public static initialize(
    config?: Partial<LoggerConfig>,
    logger?: ILogger
  ): void {
    if (this._config || this._logger) {
      throw "LoggerService has been alread initialized!";
    }
    this._config = config;
    this._logger = logger;
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
    if (this.isSeverityEnabled(LogSeverity.DEBUG)) {
      this.log(
        LogSeverity.DEBUG,
        data,
        (message: string) => this._logger.debug(blue(message))
      );
    }
  }

  public info(...data: Array<unknown>): void {
    if (this.isSeverityEnabled(LogSeverity.INFO)) {
      this.log(
        LogSeverity.INFO,
        data,
        (message: string) => this._logger.info(message)
      );
    }
  }

  public warn(...data: Array<unknown>): void {
    if (this.isSeverityEnabled(LogSeverity.WARNING)) {
      this.log(
        LogSeverity.WARNING,
        data,
        (message: string) => this._logger.warn(yellow(message))
      );
    }
  }

  public error(...data: Array<unknown>): void {
    if (this.isSeverityEnabled(LogSeverity.ERROR)) {
      this.log(
        LogSeverity.ERROR,
        data,
        (message: string) => this._logger.error(red(message))
      );
    }
  }

  private isSeverityEnabled(severity: LogSeverity): boolean {
    const enabledLogSeverities = this._config.enabledLogSeverities
      ? this._config.enabledLogSeverities
      : DEFAULT_CONFIG.enabledLogSeverities
      ;
    return enabledLogSeverities.includes(severity);
  }

  private log(
    severity: LogSeverity,
    data: Array<unknown>,
    loggerFn: (message: string) => void
  ): void {
    const applicationName = this._config.applicationName
      ? this._config.applicationName
      : DEFAULT_CONFIG.applicationName
      ;
    const sev = `[${severity}]`;
    const time = dateISOSerialize(dateNow());
    const message = data.map(m => {
      if (typeof m === "object") {
        return JSON.stringify(m);
      }
      return m;
    }).join("\n\t");
    const entry = `${time} ${applicationName} ${sev} - ${message}`;
    loggerFn(entry);
  }

}
