import { SharedWebsiteConfigReader } from "@wraithlight/common.environment-static.shared";
import {
    ControllerBinder,
    createServer
} from "@wraithlight/core.node";
import {
    ServerAccountControllerV1,
    ServerAuthControllerV1
} from "@wraithlight/common.auth-sdk.server";
import { LoginScope } from "@wraithlight/core.auth.types";
import { LoggerService } from "@wraithlight/core.logger";
import { getEnvironment } from "@wraithlight/core.env";

const CONTROLLERS = [
    new ServerAuthControllerV1(LoginScope.Website),
    new ServerAccountControllerV1()
];

const reader = SharedWebsiteConfigReader.getInstance(getEnvironment());
const server = createServer(true);

ControllerBinder.bindControllers(
    server.app,
    CONTROLLERS
)

const port = reader.get(x => x.server.port);

const logger = LoggerService.getInstance();
server.start(port, () => {
    logger.info(`WEBSITE server is running on http://localhost:${port}`);
});
