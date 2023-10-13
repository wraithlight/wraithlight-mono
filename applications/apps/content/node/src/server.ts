import { SharedContentConfigReader } from "@wraithlight/common.environment-static.shared";
import { ServerAuthControllerV1 } from "@wraithlight/common.auth-sdk.server";
import { LoginScope } from "@wraithlight/core.auth.types";
import { ApplicationName } from "@wraithlight/core.common-constants";
import { createNodeServer } from "@wraithlight/core.server";
import { getEnvironmentType } from "@wraithlight/core.env";

const sharedCfg = SharedContentConfigReader.getInstance(getEnvironmentType());

const CONTROLLERS = [
    new ServerAuthControllerV1(LoginScope.Content)
];

createNodeServer(
    ApplicationName.Content,
    CONTROLLERS,
    sharedCfg.get(x => x.server.port),
);
