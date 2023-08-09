import { getEnvironment } from "@wraithlight/core.env";
import { SharedLogsConfigReader } from "@wraithlight/common.environment-static.shared";
import {
    ControllerBinder,
    createServer
} from "@wraithlight/core.node";

import { LogsEntryController } from "./controller";

const CONTROLLERS = [
    new LogsEntryController()
];

const reader = SharedLogsConfigReader.getInstance(getEnvironment());
const server = createServer(true);

ControllerBinder.bindControllers(
    server.app,
    CONTROLLERS
)

const port = reader.get(x => x.server.port);

server.start(port, () => {
    console.log(`LOGS server is running at port ${port}`)
});
