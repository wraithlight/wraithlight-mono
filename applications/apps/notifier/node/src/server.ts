import { join } from "path";

import { ServerAuthControllerV1 } from "@wraithlight/common.auth-sdk.server";
import { ServerNotifierConfigReader } from "@wraithlight/common.environment-static.server";
import { SharedNotifierConfigReader } from "@wraithlight/common.environment-static.shared";
import { LoginScope } from "@wraithlight/core.auth.types";
import { ApplicationName } from "@wraithlight/core.common-constants";
import { CoreEnvironment } from "@wraithlight/core.env.sdk";
import { createNodeServerV2 } from "@wraithlight/core.server";

import { SendControllerV1 } from "./controller";

const serverCfg = ServerNotifierConfigReader.getInstance(CoreEnvironment.getEnvironmentType());
const sharedCfg = SharedNotifierConfigReader.getInstance(CoreEnvironment.getEnvironmentType());

const CONTROLLERS = [
    new ServerAuthControllerV1(LoginScope.Notifier),
    new SendControllerV1()
];

const frontendPath = serverCfg.getCommon(x => x.files.frontend.static);

createNodeServerV2(
    ApplicationName.Notifier,
    CONTROLLERS,
    [],
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
