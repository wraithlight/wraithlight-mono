import { COMMON_STATIC } from "@wraithlight/core.env-static";
import {
    ControllerBinder,
    createServer
} from "@wraithlight/core.node";
import { LoggerService } from "@wraithlight/core.logger";

import {
    AccountControllerV2,
    SessionControllerV2
} from "./controller";

const CONTROLLERS = [
    new AccountControllerV2(),
    new SessionControllerV2()
];

const server = createServer(true);

ControllerBinder.bindControllers(
    server.app,
    CONTROLLERS
)

const logger = LoggerService.getInstance();
server.start(COMMON_STATIC.auth.address.port, () => {
    logger.info(`AUTH server is running on http://localhost:${COMMON_STATIC.auth.address.port}`);
});
