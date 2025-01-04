import { Nullable, isNil } from "@wraithlight/framework.nullable";
import { dateISOSerialize, dateNow } from "@wraithlight/core.date";
import { blue, red, white, yellow } from "ansi-colors";

import { DEFAULT_APPLICATION_NAME } from "./logger.const";
import { LogSeverity } from "./logger.enum";

export class Logger {

  private static _applicationName = DEFAULT_APPLICATION_NAME;
  private static _instance: Nullable<Logger>;

  private constructor(
    private readonly _runtimeApplicationName: string
  ) {
  }

  public static initialize(
    applicationName: string,
  ): void {
    this._applicationName = applicationName;
  }

  public static getInstance(): Logger {
    if(isNil(this._instance)) {
      this._instance = new Logger(this._applicationName);
    }
    return this._instance;
  }

  public debug(payload: string): void {
    this.log(
      console.debug,
      blue,
      LogSeverity.Debug,
      payload
    );
  }

  public info(payload: string): void {
    this.log(
      console.info,
      white,
      LogSeverity.Info,
      payload
    );
  }

  public warning(payload: string): void {
    this.log(
      console.warn,
      yellow,
      LogSeverity.Warning,
      payload
    );
  }

  public error(payload: string): void {
    this.log(
      console.error,
      red,
      LogSeverity.Error,
      payload
    );
  }

  private log(
    logFn: (message: string) => void,
    colorFn: (message: string) => string,
    severity: LogSeverity,
    payload: string
  ): void {
    const logDate = dateISOSerialize(dateNow());
    const message = `${logDate} [${this._runtimeApplicationName}] [${severity}] - ${payload}`;

    const entry = colorFn(message);
    logFn(entry);
  }

}
