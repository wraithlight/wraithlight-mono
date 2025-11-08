import { GLOBAL_UNDEFINED } from "@wraithlight/kernel.undefined";
import cors from "cors";
import
express, {
  Application,
  json,
  static as serveStatic
} from "express";
import {
  JsonObject as SwaggerFileContent,
  serve as swaggerServe,
  setup as swaggerSetup
} from "swagger-ui-express";

import { EventBus } from "../events";
import { RequestHandler } from "../request-handler";

import {
  DEFAULT_PAYLOAD_SIZE,
  SIGINT_CODE,
  SIGINT_NAME,
  SIGTERM_CODE,
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
  process.exit(SIGTERM_CODE);
});

process.on(SIGINT_NAME, () => {
  EventBus.emitSigint();
  process.exit(SIGINT_CODE);
});

export const initServer = (
  options?: Partial<ServerOptions>
): void => {
  const payloadSize = options?.maxPayloadSizeMB ?? DEFAULT_PAYLOAD_SIZE;

  application.use(json({ limit: `${payloadSize}mb` }));

  if (options?.enableCors) {
    application.use(cors());
  }

  RequestHandler.defineBlueprints(application);
};

export const serveStaticFile = (
  route: string,
  absoluteFilePath: string,
  isEnabled = true
): void => {
  if (!isEnabled) {
    return;
  }
  application.use(route, serveStatic(absoluteFilePath));
};

export const serveStaticFolder = (
  route: string,
  absoluteFolderPath: string,
  isEnabled = true
): void => {
  if (!isEnabled) {
    return;
  }
  application.use(route, serveStatic(absoluteFolderPath));
};

export const serveSwaggerFile = (
  route: string,
  jsonContent: SwaggerFileContent,
  isEnabled = true
): void => {
  if (!isEnabled) {
    return;
  }
  application.use(
    route,
    swaggerServe,
    swaggerSetup(jsonContent)
  );
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

export const controllerBlocker = (..._args: ReadonlyArray<unknown>): void => {
  return GLOBAL_UNDEFINED;
};
