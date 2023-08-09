import { SharedContentConfigReader } from "@wraithlight/common.environment-static.shared";
import { EnvironmentType } from "@wraithlight/core.common-constant";
import {
    ControllerBinder,
    createServer
} from "@wraithlight/core.node";
import { ServerAuthControllerV1 } from "@wraithlight/common.auth-sdk.server";
import { LoginScope } from "@wraithlight/core.auth.types";

const CONTROLLERS = [
    new ServerAuthControllerV1(LoginScope.Content)
];

const environment = EnvironmentType.Local;
const sharedCfg = SharedContentConfigReader.getInstance(environment);

const server = createServer(true);

ControllerBinder.bindControllers(
    server.app,
    CONTROLLERS
);

const port = sharedCfg.get(x => x.server.port);

server.start(port, () => {
    console.log(`CONTENT server is running at port ${port}`)
});
