import { COMMON_STATIC } from "@wraithlight/core.env-static";
import {
    ControllerBinder,
    createServer
} from "@wraithlight/core.node";
import { ServerAuthControllerV1 } from "@wraithlight/common.auth-sdk.server";
import { LoginScope } from "@wraithlight/core.auth.types";

const CONTROLLERS = [
    new ServerAuthControllerV1(LoginScope.Content)
];

const server = createServer(true);

ControllerBinder.bindControllers(
    server.app,
    CONTROLLERS
)

server.start(COMMON_STATIC.content.address.port, () => {
    console.log(`CONTENT server is running at port ${COMMON_STATIC.content.address.port}`)
});
