import cors from "cors";
import express, { Application, json } from "express";

import { EventBus } from "../events";
import { RequestHandler } from "../request-handler";

import {
  DEFAULT_PAYLOAD_SIZE,
  SIGINT_CODE,
  SIGINT_NAME,
  SIGKILL_CODE,
  SIGKILL_NAME,
  SIGTERM_NAME
} from "./server.const";
import { ServerOptions, ServerStartPayload } from "./server.model";

const application: Application = express();

process.on("uncaughtException", (err) => {
  EventBus.emitProcessFatal(err);
});

process.on("unhandledRejection", (err) => {
  EventBus.emitProcessFatal(err);
});

process.on(SIGTERM_NAME, () => {
  EventBus.emitSigterm();
  process.exit(SIGINT_CODE);
});

process.on(SIGINT_NAME, () => {
  EventBus.emitSigint();
  process.exit(SIGINT_CODE);
});

process.on(SIGKILL_NAME, () => {
  EventBus.emitSigkill();
  process.exit(SIGKILL_CODE);
});

export const initServer = (
  options?: Partial<ServerOptions>
): void => {
  const payloadSize = options?.maxPayloadSizeMB ?? DEFAULT_PAYLOAD_SIZE;

  application.use(json({ limit: `${payloadSize}mb` }));

  if(options?.enableCors) {
    application.use(cors());
  }

  RequestHandler.defineBlueprints(application);
};

export const startServer = (
  port: number
): ServerStartPayload => {
  const server = application.listen(port, () => {
    EventBus.emitServerStart(port);
  });

  const stopSignal = (): void => {
    EventBus.emitServerStopSignal();
    server.close();
  };

  return {
    stopSignal: stopSignal
  };
};