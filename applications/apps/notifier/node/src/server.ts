import { COMMON_STATIC, SERVER_STATIC } from "@wraithlight/core.env-static";
import {
    ControllerBinder,
    createServer
} from "@wraithlight/core.node";
import { LoggerService } from "@wraithlight/common.logger.sdk";
import { ServerAuthControllerV1 } from "@wraithlight/common.auth-sdk.server";
import { LoginScope } from "@wraithlight/core.auth.types";
import { join } from "path";

const CONTROLLERS = [
    new ServerAuthControllerV1(LoginScope.Notifier)
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
