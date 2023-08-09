import { SharedEditorConfigReader } from "@wraithlight/common.environment-static.shared";
import {
    ControllerBinder,
    createServer
} from "@wraithlight/core.node";
import { ServerAuthControllerV1 } from "@wraithlight/common.auth-sdk.server";
import { LoginScope } from "@wraithlight/auth/core.auth.types";
import { getEnvironment } from "@wraithlight/core.env";

const CONTROLLERS = [
    new ServerAuthControllerV1(LoginScope.Content)
];

const server = createServer(true);
const reader = SharedEditorConfigReader.getInstance(getEnvironment());

ControllerBinder.bindControllers(
    server.app,
    CONTROLLERS
);

const port = reader.get(x => x.server.port);

server.start(port, () => {
    console.log(`EDITOR server is running at port ${port}`)
});
