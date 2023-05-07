import { Application } from "express";

export interface AppRef {
    app: Application;
    serveSwagger(route: string, staticPath: string): AppRef;
    serveStatic(route: string, staticPath: string): AppRef;
    start(port: number, callback?: () => void): void;
    stop(callback?: () => void): void;
}
