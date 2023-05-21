import { COMMON_STATIC } from "@wraithlight/core.env-static";
import {
    ControllerBinder,
    createServer
} from "@wraithlight/core.node";
import { ServerAuthControllerV1 } from "@wraithlight/common.auth-sdk.server";
import { LoginScope } from "@wraithlight/auth/core.auth.types";

import {
    AuthController
} from "./controller";

const CONTROLLERS = [
    new AuthController(),
    new ServerAuthControllerV1(LoginScope.Content)
];

const server = createServer(true);

ControllerBinder.bindControllers(
    server.app,
    CONTROLLERS
)

server.start(COMMON_STATIC.editor.address.port, () => {
    console.log(`EDITOR server is running at port ${COMMON_STATIC.editor.address.port}`)
});
