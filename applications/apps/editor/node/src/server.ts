import { ServerAuthControllerV1 } from "@wraithlight/common.auth-sdk.server";
import { SharedEditorConfigReader } from "@wraithlight/common.environment-static.shared";
import { ApplicationName } from "@wraithlight/core.auth.constant";
import { LoginScope } from "@wraithlight/core.auth.types";
import { CoreEnvironment } from "@wraithlight/core.env.sdk";
import { createNodeServer } from "@wraithlight/core.server";

const sharedCfg = SharedEditorConfigReader
    .getInstance(CoreEnvironment.getEnvironmentType())
;

const CONTROLLERS = [
    new ServerAuthControllerV1(LoginScope.Content)
];

createNodeServer(
    ApplicationName.Editor,
    CONTROLLERS,
    [],
    sharedCfg.get(x => x.server.port),
);
