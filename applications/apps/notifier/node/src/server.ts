import { ServerAuthControllerV1 } from "@wraithlight/common.auth-sdk.server";
import { LoginScope } from "@wraithlight/core.auth.types";
import { ServerNotifierConfigReader } from "@wraithlight/common.environment-static.server";
import { SharedNotifierConfigReader } from "@wraithlight/common.environment-static.shared";
import { ApplicationName } from "@wraithlight/core.common-constant";
import { createNodeServer } from "@wraithlight/core.server";
import { getEnvironmentType } from "@wraithlight/core.env";
import { join } from "path";

import { SendControllerV1 } from "./controller";

const serverCfg = ServerNotifierConfigReader.getInstance(getEnvironmentType());
const sharedCfg = SharedNotifierConfigReader.getInstance(getEnvironmentType());

const CONTROLLERS = [
    new ServerAuthControllerV1(LoginScope.Notifier),
    new SendControllerV1()
];

const frontendPath = serverCfg.getCommon(x => x.files.frontend.static);

createNodeServer(
    ApplicationName.Notifier,
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
