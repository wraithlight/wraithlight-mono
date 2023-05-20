export interface ILogger {
    debug(...data: Array<any>): void;
    info(...data: Array<any>): void;
    warn(...data: Array<any>): void;
    error(...data: Array<any>): void;
}
