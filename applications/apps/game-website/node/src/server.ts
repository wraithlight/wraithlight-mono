import { join } from "path";

import { ServerGameWebsiteConfigReader } from "@wraithlight/common.environment-static.server";
import { SharedGameWebsiteConfigReader } from "@wraithlight/common.environment-static.shared";
import { ApplicationName } from "@wraithlight/core.auth.constant";
import { CoreEnvironment } from "@wraithlight/core.env.sdk";
import { BaseController } from "@wraithlight/core.node";
import { createNodeServer } from "@wraithlight/core.server";

const serverCfg = ServerGameWebsiteConfigReader
    .getInstance(CoreEnvironment.getEnvironmentType())
;

const sharedCfg = SharedGameWebsiteConfigReader
    .getInstance(CoreEnvironment.getEnvironmentType())
;

const CONTROLLERS: Array<BaseController> = [
];

const frontendPath = serverCfg.getCommon(x => x.files.frontend.static);

createNodeServer(
    ApplicationName.GameWebsite,
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
