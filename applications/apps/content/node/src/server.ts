import { ServerAuthControllerV1 } from "@wraithlight/common.auth-sdk.server";
import { SharedContentConfigReader } from "@wraithlight/common.environment-static.shared";
import { HealthCheckControllerV1 } from "@wraithlight/common.health-checker.sdk-server";
import { ApplicationName } from "@wraithlight/core.auth.constant";
import { LoginScope } from "@wraithlight/core.auth.types";
import { CoreEnvironment } from "@wraithlight/core.env.sdk";
import { createNodeServer } from "@wraithlight/core.server";

const sharedCfg = SharedContentConfigReader
    .getInstance(CoreEnvironment.getEnvironmentType())
;

const CONTROLLERS = [
    new ServerAuthControllerV1(LoginScope.Content),
    new HealthCheckControllerV1(
        "common", // TODO: Package JSON reader
        "1.0.0" // TODO: Package JSON reader
    )
];

createNodeServer(
    ApplicationName.Content,
    CONTROLLERS,
    [],
    sharedCfg.get(x => x.server.port),
);
