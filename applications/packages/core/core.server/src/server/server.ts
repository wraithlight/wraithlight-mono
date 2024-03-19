import { LoggerService } from "@wraithlight/common.logger.sdk";
import { ApplicationName } from "@wraithlight/core.common-constants";
import {
    BaseController,
    ControllerBinder,
    createServer
} from "@wraithlight/core.node";

import { SIGINT, SIGTREM } from "./server.const";
import { IProviderFactory } from "./server.model";

/**
 * @deprecated Use `createNodeServerV2` instead.
 */
export function createNodeServer(
    appName: ApplicationName,
    controllers: ReadonlyArray<BaseController>,
    port: number,
    staticFiles?: Array<{ path: string, staticPath: string }>,
    onStartCallback?: (stopRef: () => void) => void,
    onStopCallback?: () => void
): void {
    createNodeServerV2(
        appName,
        controllers,
        [],
        port,
        staticFiles,
        onStartCallback,
        onStopCallback
    );
}

export function createNodeServerV2(
    appName: ApplicationName,
    controllers: ReadonlyArray<BaseController>,
    providers: ReadonlyArray<IProviderFactory>,
    port: number,
    staticFiles?: Array<{ path: string, staticPath: string }>,
    onStartCallback?: (stopRef: () => void) => void,
    onStopCallback?: () => void
): void {
    const server = createServer(true);
    const logger = LoggerService.getInstance();
    ControllerBinder.bindControllers(
        server.getApp(),
        controllers
    );

    if(staticFiles && staticFiles.length > 0) {
        staticFiles.forEach(m => {
            server.serveStatic(m.path, m.staticPath);
        });
    }

    providers.forEach(m => m(server.getServer()));

    server.start(port, () => {
        logger.info(`${appName} is running on port '${port}'`);
        onStartCallback && onStartCallback(() => server.stop(onStopCallback));
    });

    process.on(SIGINT, () => {
        logger.info(`Received '${SIGINT}' signal - stopping.`);
        onStopCallback && onStopCallback();
        process.exit();
    });

    process.on(SIGTREM, () => {
        logger.info(`Received '${SIGTREM}' signal - stopping.`);
        onStopCallback && onStopCallback();
        process.exit();
    });
}
