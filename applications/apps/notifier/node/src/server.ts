import { COMMON_STATIC, SERVER_STATIC } from "@wraithlight/core.env-static";
import {
    ControllerBinder,
    createServer
} from "@wraithlight/core.node";
import { LoggerService } from "@wraithlight/core.logger";
import { join } from "path";

const CONTROLLERS = [
];

const server = createServer(true);

ControllerBinder.bindControllers(
    server.app,
    CONTROLLERS
)

server.serveStatic(SERVER_STATIC.common.paths.base, join(__dirname, SERVER_STATIC.common.files.frontend));
server.serveStatic(SERVER_STATIC.common.paths.wildcard, join(__dirname, SERVER_STATIC.common.files.frontend));

const logger = LoggerService.getInstance();
server.start(COMMON_STATIC.auth.address.port, () => {
    logger.info(`AUTH server is running on http://localhost:${COMMON_STATIC.auth.address.port}`);
});
