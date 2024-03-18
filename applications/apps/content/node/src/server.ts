import { ServerAuthControllerV1 } from "@wraithlight/common.auth-sdk.server";
import { SharedContentConfigReader } from "@wraithlight/common.environment-static.shared";
import { LoginScope } from "@wraithlight/core.auth.types";
import { ApplicationName } from "@wraithlight/core.common-constants";
import { CoreEnvironment } from "@wraithlight/core.env";
import { createNodeServerV2 } from "@wraithlight/core.server";

const sharedCfg = SharedContentConfigReader.getInstance(CoreEnvironment.getEnvironmentType());

const CONTROLLERS = [
    new ServerAuthControllerV1(LoginScope.Content)
];

createNodeServerV2(
    ApplicationName.Content,
    CONTROLLERS,
    [],
    sharedCfg.get(x => x.server.port),
);
