import { Server, createServer } from "http";

import { LoggerService } from "@wraithlight/common.logger.sdk";
import { Application, NextFunction, Request, Response, static as serveStatic } from "express";
import {
  serve as swaggerServe,
  setup as swaggerSetup
} from "swagger-ui-express";

import { AppRef as IAppRef } from "./appref.model";

export class AppRef implements IAppRef {

  private _listener: Server | undefined;
  private readonly _server: Server;
  private readonly _logger = LoggerService.getInstance();

  constructor(
    private readonly _app: Application
  ) {
    this._server = createServer(this._app);
  }

  public getServer(): Server {
    return this._server;
  }

  public getApp(): Application {
    return this._app;
  }

  public serveStatic(
    route: string,
    staticPath: string,
    callback?: (req: Request) => void
  ): IAppRef {
    this._app.use(
      route,
      serveStatic(staticPath),
      (req: Request, _res: Response, next: NextFunction) => {
        callback && callback(req);
        next();
      }
    );
    return this;
  }

  public serveSwagger(route: string, staticPath: string): IAppRef {
    // eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-assignment
    const document = require(staticPath);
    this._app.use(
      route,
      swaggerServe,
      swaggerSetup(document)
    );
    return this;
  }

  public start(
    port: number,
    callback?: () => void
  ): void {
    this._listener = this._server.listen(
      port,
      () => {
        this._logger.info(`The app is up and running on http://localhost:${port}`);
        if (callback) {
          callback();
        }
      }
    );
  }

  public stop(callback?: () => void): void {
    this._listener?.close(() => {
      if (callback) {
        callback();
      }
    });
  }

}
