import { join } from "path";

import { ServerAccountControllerV1, ServerAuthControllerV1 } from "@wraithlight/common.auth-sdk.server";
import { ServerWebsiteConfigReader } from "@wraithlight/common.environment-static.server";
import { SharedWebsiteConfigReader } from "@wraithlight/common.environment-static.shared";
import { ApplicationName } from "@wraithlight/core.auth.constant";
import { LoginScope } from "@wraithlight/core.auth.types";
import { CoreEnvironment } from "@wraithlight/core.env.sdk";
import { createNodeServer } from "@wraithlight/core.server";


const serverCfg = ServerWebsiteConfigReader
    .getInstance(CoreEnvironment.getEnvironmentType())
;

const sharedCfg = SharedWebsiteConfigReader
    .getInstance(CoreEnvironment.getEnvironmentType())
;

const CONTROLLERS = [
    new ServerAuthControllerV1(LoginScope.Website),
    new ServerAccountControllerV1()
];

const frontendPath = serverCfg.getCommon(x => x.files.frontend.static);

createNodeServer(
    ApplicationName.Website,
    CONTROLLERS,
    [],
    sharedCfg.get(x => x.server.port),
    [
        {
            path: serverCfg.getCommon(x => x.paths.base),
            staticPath: join(
                __dirname,
                frontendPath
            )
        },
        {
            path: serverCfg.getCommon(x => x.paths.wildcard),
            staticPath: join(
                __dirname,
                frontendPath
            )
        }
    ]
);
