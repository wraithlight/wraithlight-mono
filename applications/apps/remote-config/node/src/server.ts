import { SharedRemoteConfigConfigReader } from "@wraithlight/common.environment-static.shared";
import { ApplicationName } from "@wraithlight/core.common-constant";
import { createNodeServer } from "@wraithlight/core.server";
import { getEnvironmentType } from "@wraithlight/core.env";
import { BaseController } from "@wraithlight/core.node";

const sharedCfg = SharedRemoteConfigConfigReader.getInstance(getEnvironmentType());

const CONTROLLERS: ReadonlyArray<BaseController> = [
];

createNodeServer(
    ApplicationName.RemoteConfig,
    CONTROLLERS,
    sharedCfg.get(x => x.server.port),
);
