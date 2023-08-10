import { ServerNotifierConfigReader } from "@wraithlight/common.environment-static.server";
import { SharedNotifierConfigReader } from "@wraithlight/common.environment-static.shared";
import { ApplicationName } from "@wraithlight/core.common-constant";
import { createNodeServer } from "@wraithlight/core.server";
import { getEnvironment } from "@wraithlight/core.env";
import { join } from "path";

import { AccountControllerV2, SessionControllerV2 } from "./controller";

const serverCfg = ServerNotifierConfigReader.getInstance(getEnvironment());
const sharedCfg = SharedNotifierConfigReader.getInstance(getEnvironment());

const CONTROLLERS = [
    new AccountControllerV2(),
    new SessionControllerV2()
];

const frontendPath = serverCfg.getCommon(x => x.files.frontend.static);

createNodeServer(
    ApplicationName.UserManagement,
    CONTROLLERS,
    sharedCfg.get(x => x.server.port),
    [
        {
            path: serverCfg.getCommon(x => x.paths.base),
            staticPath: join(__dirname, frontendPath)
        },
        {
            path: serverCfg.getCommon(x => x.paths.wildcard),
            staticPath: join(__dirname, frontendPath)
        }
    ]
);
