import { utcNow } from "@wraithlight/core.date";
import { Guid } from "@wraithlight/core.guid";
import { HttpCode } from "@wraithlight/core.http";
import { MessagebusService } from "@wraithlight/core.messagebus";

import { SERVER_EVENTS } from "./event.const";
import { ServerStopReason } from "./event.enum";
import {
  IFilterFailEvent,
  IFilterFatalEvent,
  IParamFatalEvent,
  IProcessFatalEvent,
  IRequestEndEvent,
  IRequestFatalEvent,
  IRequestStartEvent,
  IServerStartEvent,
  IServerStopEvent
} from "./event.model";

export class EventBus {

  private static messageBus = new MessagebusService();

  public static emitProcessFatal(
    error: Error | unknown
  ): void {
    this.messageBus.push<IProcessFatalEvent>(
      SERVER_EVENTS.ON_PROCESS_FATAL,
      {
        dateUtc: utcNow(),
        error: error
      }
    );
  }

  public static emitRequestStart(
    correlationId: Guid
  ): void {
    this.messageBus.push<IRequestStartEvent>(
      SERVER_EVENTS.ON_REQUEST_START,
      {
        correlationId: correlationId,
        dateUtc: utcNow()
      }
    );
  }

  public static emitRequestEnd(
    correlationId: Guid,
    timeTaken: number
  ): void {
    this.messageBus.push<IRequestEndEvent>(
      SERVER_EVENTS.ON_REQUEST_END,
      {
        correlationId: correlationId,
        dateUtc: utcNow(),
        timeTaken: timeTaken
      }
    );
  }

  public static emitFilterFatal(
    correlationId: Guid
  ): void {
    this.messageBus.push<IFilterFatalEvent>(
      SERVER_EVENTS.ON_FILTER_FATAL,
      {
        correlationId: correlationId,
        dateUtc: utcNow(),
      }
    );
  }

  public static emitFilterFail(
    correlationId: Guid,
    message: string,
    code: HttpCode
  ): void {
    this.messageBus.push<IFilterFailEvent>(
      SERVER_EVENTS.ON_FILTER_FAIL,
      {
        correlationId: correlationId,
        dateUtc: utcNow(),
        message: message,
        code: code
      }
    );
  }

  public static emitRequestFatal(
    correlationId: Guid
  ): void {
    this.messageBus.push<IRequestFatalEvent>(
      SERVER_EVENTS.ON_REQUEST_FATAL,
      {
        correlationId: correlationId,
        dateUtc: utcNow()
      }
    );
  }

  public static emitParamFatal(
    correlationId: Guid,
    paramName: string
  ): void {
    this.messageBus.push<IParamFatalEvent>(
      SERVER_EVENTS.ON_PARAM_FATAL,
      {
        correlationId: correlationId,
        dateUtc: utcNow(),
        paramName: paramName
      }
    );
  }

  public static emitServerStart(
    port: number
  ): void {
    this.messageBus.push<IServerStartEvent>(
      SERVER_EVENTS.ON_SERVER_START,
      {
        dateUtc: utcNow(),
        port: port
      }
    )
  }

  public static emitServerStopSignal(): void {
    this.messageBus.push<IServerStopEvent>(
      SERVER_EVENTS.ON_SERVER_STOP_SIGNAL,
      {
        dateUtc: utcNow(),
        reason: ServerStopReason.stopSignal
      }
    );
  }

  public static emitSigterm(): void {
    this.messageBus.push<IServerStopEvent>(
      SERVER_EVENTS.ON_SIGTERM,
      {
        dateUtc: utcNow(),
        reason: ServerStopReason.sigterm
      }
    );
  }

  public static emitSigint(): void {
    this.messageBus.push<IServerStopEvent>(
      SERVER_EVENTS.ON_SIGINT,
      {
        dateUtc: utcNow(),
        reason: ServerStopReason.sigint
      }
    );
  }

  public static emitSigkil(): void {
    this.messageBus.push<IServerStopEvent>(
      SERVER_EVENTS.ON_SIGKILL,
      {
        dateUtc: utcNow(),
        reason: ServerStopReason.sigkill
      }
    );
  }

  public static onProcessFatal(
    handler: (payload: IProcessFatalEvent) => void
  ): void {
    this.messageBus.sub(SERVER_EVENTS.ON_PROCESS_FATAL, handler);
  }

  public static onServerStart(
    handler: (payload: IServerStartEvent) => void
  ): void {
    this.messageBus.sub(SERVER_EVENTS.ON_SERVER_START, handler);
  }

  public static onServerStopSignal(
    handler: (payload: IServerStopEvent) => void
  ): void {
    this.messageBus.sub(SERVER_EVENTS.ON_SERVER_STOP_SIGNAL, handler);
  }

  public static onRequestStart(
    handler: (payload: IRequestStartEvent) => void
  ): void {
    this.messageBus.sub(SERVER_EVENTS.ON_REQUEST_START, handler);
  }

  public static onRequestEnd(
    handler: (payload: IRequestEndEvent) => void
  ): void {
    this.messageBus.sub(SERVER_EVENTS.ON_REQUEST_END, handler);
  }

  public static onFilterFatal(
    handler: (payload: IFilterFatalEvent) => void
  ): void {
    this.messageBus.sub(SERVER_EVENTS.ON_FILTER_FATAL, handler);
  }

  public static onFilterFail(
    handler: (payload: IFilterFailEvent) => void
  ): void {
    this.messageBus.sub(SERVER_EVENTS.ON_FILTER_FAIL, handler);
  }

  public static onRequestFatal(
    handler: (payload: IRequestFatalEvent) => void
  ): void {
    this.messageBus.sub(SERVER_EVENTS.ON_REQUEST_FATAL, handler);
  }

  public static onParamFatal(
    handler: (payload: IParamFatalEvent) => void
  ): void {
    this.messageBus.sub(SERVER_EVENTS.ON_PARAM_FATAL, handler);
  }

  public static onSigterm(
    handler: (payload: IServerStopEvent) => void
  ): void {
    this.messageBus.sub(SERVER_EVENTS.ON_SIGTERM, handler);
  }

  public static onSigint(
    handler: (payload: IServerStopEvent) => void
  ): void {
    this.messageBus.sub(SERVER_EVENTS.ON_SIGINT, handler);
  }

  public static onSigkill(
    handler: (payload: IServerStopEvent) => void
  ): void {
    this.messageBus.sub(SERVER_EVENTS.ON_SIGKILL, handler);
  }

}
