import { SharedEditorConfigReader } from "@wraithlight/common.environment-static.shared";
import { ServerAuthControllerV1 } from "@wraithlight/common.auth-sdk.server";
import { LoginScope } from "@wraithlight/core.auth.types";
import { ApplicationName } from "@wraithlight/core.common-constants";
import { createNodeServer } from "@wraithlight/core.server";
import { CoreEnvironment } from "@wraithlight/core.env";

const sharedCfg = SharedEditorConfigReader.getInstance(CoreEnvironment.getEnvironmentType());

const CONTROLLERS = [
    new ServerAuthControllerV1(LoginScope.Content)
];

createNodeServer(
    ApplicationName.Editor,
    CONTROLLERS,
    sharedCfg.get(x => x.server.port),
);
