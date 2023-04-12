import { COMMON_STATIC } from "@wraithlight/core.env-static";
import {
    ControllerBinder,
    createServer
} from "@wraithlight/core.node";

import {
    AcoountController,
    SessionController
} from "./controller";

const CONTROLLERS = [
    new AcoountController(),
    new SessionController()
];

const server = createServer(true);

ControllerBinder.bindControllers(
    server.app,
    CONTROLLERS
)

server.start(COMMON_STATIC.auth.address.port, () => {
    console.log(`AUTH server is running at port ${COMMON_STATIC.auth.address.port}`)
});
