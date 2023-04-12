import { SERVER_STATIC } from "@wraithlight/core.env-static";
import {
    ControllerBinder,
    createServer
} from "@wraithlight/core.node";

import { LogsEntryController } from "./controller";

const CONTROLLERS = [
    new LogsEntryController()
];

const server = createServer(true);

ControllerBinder.bindControllers(
    server.app,
    CONTROLLERS
)

server.start(SERVER_STATIC.logs.address.port, () => {
    console.log(`LOGS server is running at port ${SERVER_STATIC.logs.address.port}`)
});
