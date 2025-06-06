import { Guid } from "@wraithlight/core.guid";
import { HttpCode } from "@wraithlight/core.http";

import { RequestEndReason, ServerStopReason } from "./event.enum";

interface IProcessEvent {
  dateUtc: Date
}

interface IRequestEvent extends IProcessEvent {
  correlationId: Guid;
}

interface IFilterEvent extends IRequestEvent {}

interface IParamEvent extends IRequestEvent {}

export interface ICoreControllerFatalEvent extends IRequestEvent {
  injectionToken: string;
}

export interface ICoreMethodFatalEvent extends IRequestEvent {
  injectionToken: string;
  methodName: string;
}

export interface IProcessFatalEvent extends IProcessEvent {
  error: Error | unknown;
}

export interface IRequestStartEvent extends IRequestEvent {}
export interface IRequestEndEvent extends IRequestEvent {
  timeTaken: number;
  httpCode: HttpCode;
  reason: RequestEndReason
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

export interface IBindingsDoneEvent {
  dateUtc: Date;
}
