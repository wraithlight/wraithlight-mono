import { Application, static as serveStatic } from "express";
import { Server } from "http";
import {
    serve as swaggerServe,
    setup as swaggerSetup
} from "swagger-ui-express";

import { AppRef as IAppRef } from "./appref.model";

export class AppRef implements IAppRef {

    private _listener: Server | undefined;

    constructor(
        public readonly app: Application
    ) { }

    public serveStatic(route: string, staticPath: string): IAppRef {
        this.app.use(route, serveStatic(staticPath));
        return this;
    }

    public serveSwagger(route: string, staticPath: string): IAppRef {
        const document = require(staticPath);
        this.app.use(route, swaggerServe, swaggerSetup(document));
        return this;
    }

    public start(
        port: number,
        callback?: () => void
    ): void {
        this._listener = this.app.listen(port, () => {
            console.log(`The app is up and running on http://localhost:${port}`);
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
