import { Server } from "http";

import { Application, Request } from "express";

export interface AppRef {
  getApp(): Application;
  getServer(): Server;
  serveSwagger(route: string, staticPath: string): AppRef;
  serveStatic(
    route: string,
    staticPath: string,
    serveCallback?: (request: Request) => void
  ): AppRef;
  start(port: number, callback?: () => void): void;
  stop(callback?: () => void): void;
}
