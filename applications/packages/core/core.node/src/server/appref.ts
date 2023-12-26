import { Application, static as serveStatic, Request, Response, NextFunction } from "express";
import { LoggerService } from "@wraithlight/common.logger.sdk";
import { Server } from "http";
import {
    serve as swaggerServe,
    setup as swaggerSetup
} from "swagger-ui-express";

import { AppRef as IAppRef } from "./appref.model";

export class AppRef implements IAppRef {

    private _listener: Server | undefined;
    private readonly _logger = LoggerService.getInstance();

    constructor(
        private readonly _app: Application
    ) { }

    public getApp(): Application {
        return this._app;
    }

    public serveStatic(route: string, staticPath: string, callback?: (req: Request) => void): IAppRef {
        this._app.use(route, serveStatic(staticPath), (req: Request, _res: Response, next: NextFunction) => {
            callback && callback(req);
            next();
        });
        return this;
    }

    public serveSwagger(route: string, staticPath: string): IAppRef {
        const document = require(staticPath);
        this._app.use(route, swaggerServe, swaggerSetup(document));
        return this;
    }

    public start(
        port: number,
        callback?: () => void
    ): void {
        this._listener = this._app.listen(port, () => {
            this._logger.info(`The app is up and running on http://localhost:${port}`);
            if (callback) {
                callback();
            }
        });
    }

    public stop(callback?: () => void): void {
        this._listener?.close(() => {
            if (callback) {
                callback();
            }
        });
    }

}
