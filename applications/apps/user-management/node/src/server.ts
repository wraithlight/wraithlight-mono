import { COMMON_STATIC } from "@wraithlight/core.env-static";
import {
    ControllerBinder,
    createServer
} from "@wraithlight/core.node";
import {
    ServerAuthControllerV1
} from "@wraithlight/common.auth-sdk.server";
import { LoginScope } from "@wraithlight/auth/core.auth.types";
import { LoggerService } from "@wraithlight/core.logger";

const CONTROLLERS = [
    new ServerAuthControllerV1(LoginScope.UserManagement)
];

const server = createServer(true);

ControllerBinder.bindControllers(
    server.app,
    CONTROLLERS
)


const logger = LoggerService.getInstance();
server.start(COMMON_STATIC.userManagement.address.port, () => {
    logger.info(`USER MANAGEMENT server is running on http://localhost:${COMMON_STATIC.userManagement.address.port}`);
});
