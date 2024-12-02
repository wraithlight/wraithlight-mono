import express, { Application, json } from "express";
import cors from "cors";

import { EventBus } from "../events";
import { RequestHandler } from "../request-handler";

import { DEFAULT_PAYLOAD_SIZE } from "./server.const";
import { ServerOptions, ServerStartPayload } from "./server.model";

const application: Application = express();

process.on("uncaughtException", (err) => {
  EventBus.emitProcessFatal(err);
});

process.on("unhandledRejection", (err) => {
  EventBus.emitProcessFatal(err);
});

export const initServer = (
  options?: Partial<ServerOptions>
) => {
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

  const stopSignal = () => {
    EventBus.emitServerStopSignal();
    server.close();
  };

  return {
    stopSignal: stopSignal
  }
};
