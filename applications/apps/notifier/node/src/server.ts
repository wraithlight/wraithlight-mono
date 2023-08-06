import { ServerNotifierConfigReader } from "@wraithlight/common.environment-static.server";
import { SharedNotifierConfigReader } from "@wraithlight/common.environment-static.shared";
import {
    ControllerBinder,
    createServer
} from "@wraithlight/core.node";
import { LoggerService } from "@wraithlight/common.logger.sdk";
import { ServerAuthControllerV1 } from "@wraithlight/common.auth-sdk.server";
import { LoginScope } from "@wraithlight/core.auth.types";
import { join } from "path";
import { EnvironmentType } from "@wraithlight/core.common-constant";

const CONTROLLERS = [
    new ServerAuthControllerV1(LoginScope.Notifier)
];

const environment = EnvironmentType.Local;
const serverCfg = ServerNotifierConfigReader.getInstance(environment);
const sharedCfg = SharedNotifierConfigReader.getInstance(environment);

const server = createServer(true);

ControllerBinder.bindControllers(
    server.app,
    CONTROLLERS
);

const port = sharedCfg.get(x => x.server.port);
const frontendPath = serverCfg.getCommon(x => x.files.frontend.static);

server.serveStatic(serverCfg.getCommon(x => x.paths.base), join(__dirname, frontendPath));
server.serveStatic(serverCfg.getCommon(x => x.paths.wildcard), join(__dirname, frontendPath));

const logger = LoggerService.getInstance();
server.start(port, () => {
    logger.info(`AUTH server is running on http://localhost:${port}`);
});
