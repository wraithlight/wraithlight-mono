import { ServerGameWebsiteConfigReader } from "@wraithlight/common.environment-static.server";
import { SharedGameWebsiteConfigReader } from "@wraithlight/common.environment-static.shared";
import { ApplicationName } from "@wraithlight/core.common-constant";
import { createNodeServer } from "@wraithlight/core.server";
import { getEnvironmentType } from "@wraithlight/core.env";
import { BaseController } from "@wraithlight/core.node";
import { join } from "path";

const serverCfg = ServerGameWebsiteConfigReader.getInstance(getEnvironmentType());
const sharedCfg = SharedGameWebsiteConfigReader.getInstance(getEnvironmentType());

const CONTROLLERS: Array<BaseController> = [
];

const frontendPath = serverCfg.getCommon(x => x.files.frontend.static);

createNodeServer(
    ApplicationName.GameWebsite,
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

console.log(join(__dirname, frontendPath));
