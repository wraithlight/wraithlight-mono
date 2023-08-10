import { SharedContentConfigReader } from "@wraithlight/common.environment-static.shared";
import { ServerAuthControllerV1 } from "@wraithlight/common.auth-sdk.server";
import { LoginScope } from "@wraithlight/auth/core.auth.types";
import { ApplicationName } from "@wraithlight/core.common-constant";
import { createNodeServer } from "@wraithlight/core.server";
import { getEnvironment } from "@wraithlight/core.env";

const sharedCfg = SharedContentConfigReader.getInstance(getEnvironment());

const CONTROLLERS = [
    new ServerAuthControllerV1(LoginScope.Content)
];

createNodeServer(
    ApplicationName.Content,
    CONTROLLERS,
    sharedCfg.get(x => x.server.port),
);
