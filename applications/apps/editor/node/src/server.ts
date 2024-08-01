import { ServerAuthControllerV1 } from "@wraithlight/common.auth-sdk.server";
import { SharedEditorConfigReader } from "@wraithlight/common.environment-static.shared";
import { HealthCheckControllerV1 } from "@wraithlight/common.health-checker.sdk-server";
import { LoggerService } from "@wraithlight/common.logger.sdk";
import { ApplicationName } from "@wraithlight/core.auth.constant";
import { LoginScope } from "@wraithlight/core.auth.types";
import { CoreEnvironment } from "@wraithlight/core.env.sdk";
import { createNodeServer } from "@wraithlight/core.server";

LoggerService.initialize({
    applicationName: ApplicationName.Editor
});

const sharedCfg = SharedEditorConfigReader
    .getInstance(CoreEnvironment.getEnvironmentType())
;

const CONTROLLERS = [
    new ServerAuthControllerV1(LoginScope.Editor),
    new HealthCheckControllerV1(
        ApplicationName.Editor,
        "1.0.0" // TODO: Package JSON reader
    )
];

createNodeServer(
    ApplicationName.Editor,
    CONTROLLERS,
    [],
    sharedCfg.get(x => x.server.port),
);
