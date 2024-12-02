import { Guid } from "@wraithlight/core.guid";
import { HttpCode } from "@wraithlight/core.http";

import { ServerStopReason } from "./event.enum";

interface IProcessEvent {
  dateUtc: Date
}

interface IRequestEvent extends IProcessEvent {
  correlationId: Guid;
}

interface IFilterEvent extends IRequestEvent {}

interface IParamEvent extends IRequestEvent {
  paramName: string;
}

export interface IProcessFatalEvent extends IProcessEvent {
  error: Error | unknown;
}

export interface IRequestStartEvent extends IRequestEvent {}
export interface IRequestEndEvent extends IRequestEvent {
  timeTaken: number;
}
export interface IRequestFatalEvent extends IRequestEvent {}

export interface IFilterFatalEvent extends IFilterEvent {}
export interface IFilterFailEvent extends IFilterEvent {
  message: string;
  code: HttpCode;
}

export interface IParamFatalEvent extends IParamEvent {}

export interface IServerStartEvent {
  dateUtc: Date;
  port: number;
}

export interface IServerStopEvent {
  dateUtc: Date;
  reason: ServerStopReason
}
