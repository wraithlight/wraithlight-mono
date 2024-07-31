import { join } from "path";

import { ServerAuthControllerV1 } from "@wraithlight/common.auth-sdk.server";
import { ServerContentConfigReader } from "@wraithlight/common.environment-static.server";
import { SharedContentConfigReader } from "@wraithlight/common.environment-static.shared";
import { HealthCheckControllerV1 } from "@wraithlight/common.health-checker.sdk-server";
import { LoggerService } from "@wraithlight/common.logger.sdk";
import { ApplicationName } from "@wraithlight/core.auth.constant";
import { LoginScope } from "@wraithlight/core.auth.types";
import { CoreEnvironment } from "@wraithlight/core.env.sdk";
import { createNodeServer } from "@wraithlight/core.server";

LoggerService.initialize({
    applicationName: ApplicationName.Content
});

const serverCfg = ServerContentConfigReader
    .getInstance(CoreEnvironment.getEnvironmentType())
;
const sharedCfg = SharedContentConfigReader
    .getInstance(CoreEnvironment.getEnvironmentType())
;

const CONTROLLERS = [
    new ServerAuthControllerV1(LoginScope.Content),
    new HealthCheckControllerV1(
        ApplicationName.Content,
        "1.0.0" // TODO: Package JSON reader
    )
];

const frontendPath = serverCfg.getCommon(x => x.files.frontend.static);
createNodeServer(
    ApplicationName.Content,
    CONTROLLERS,
    [],
    sharedCfg.get(x => x.server.port),
    [
        {
            path: serverCfg.getCommon(x => x.paths.base),
            staticPath: join(
                __dirname,
                frontendPath
            )
        },
        {
            path: serverCfg.getCommon(x => x.paths.wildcard),
            staticPath: join(
                __dirname,
                frontendPath
            )
        }
    ]
);
