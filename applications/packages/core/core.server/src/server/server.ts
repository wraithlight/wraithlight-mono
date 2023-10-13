import {
    BaseController,
    ControllerBinder,
    createServer
} from "@wraithlight/core.node";
import { ApplicationName } from "@wraithlight/core.common-constants";
import { LoggerService } from "@wraithlight/common.logger.sdk";

export function createNodeServer(
    appName: ApplicationName,
    controllers: ReadonlyArray<BaseController>,
    port: number,
    staticFiles?: Array<{ path: string, staticPath: string }>,
    onStartCallback?: (stopRef: () => void) => void
): void {
    const server = createServer(true);
    const logger = LoggerService.getInstance();
    ControllerBinder.bindControllers(
        server.app,
        controllers
    );

    if(staticFiles && staticFiles.length > 0) {
        staticFiles.forEach(m => {
            server.serveStatic(m.path, m.staticPath);
        });
    }

    server.start(port, () => {
        logger.info(`${appName} is running on port '${port}'`);
        onStartCallback && onStartCallback(server.stop);
    });
}