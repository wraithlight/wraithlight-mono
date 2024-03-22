import { SharedRemoteConfigConfigReader } from "@wraithlight/common.environment-static.shared";
import { ApplicationName } from "@wraithlight/core.auth.constant";
import { CoreEnvironment } from "@wraithlight/core.env.sdk";
import { BaseController } from "@wraithlight/core.node";
import { createNodeServer } from "@wraithlight/core.server";

const sharedCfg = SharedRemoteConfigConfigReader
    .getInstance(CoreEnvironment.getEnvironmentType())
;

const CONTROLLERS: ReadonlyArray<BaseController> = [
];

createNodeServer(
    ApplicationName.RemoteConfig,
    CONTROLLERS,
    [],
    sharedCfg.get(x => x.server.port),
);
