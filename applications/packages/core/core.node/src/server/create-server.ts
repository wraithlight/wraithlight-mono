import { LoggerService } from "@wraithlight/common.logger.sdk";
import cors from "cors";
import express, {
  Application,
  NextFunction,
  Request,
  Response,
  json
} from "express";

import { AppRef as AppRefImpl } from "./appref";
import { AppRef } from "./appref.model";
import { requestLogger } from "./middleware";

export function createServer(
  enableCors: boolean,
  logRequests = true
): AppRef {
  const logger = LoggerService.getInstance();
  process.on(
    "uncaughtException",
    function (err) {
      logger.warn("Global exception caught!",
        JSON.stringify(
          err,
          Object.getOwnPropertyNames(
            err
          )
        )
      );
    });

  const app: Application = express();

  app.use(json({ limit: "2mb" }));
  logRequests && app.use((
    req: Request,
    res: Response,
    next: NextFunction) => requestLogger(
    req,
    res,
    next
  )
  );

  if (enableCors) {
    app.use(cors());
  }

  return new AppRefImpl(app);
}
