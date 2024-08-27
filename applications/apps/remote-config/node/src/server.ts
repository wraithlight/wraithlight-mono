import { SharedRemoteConfigConfigReader } from "@wraithlight/common.environment-static.shared";
import { HealthCheckControllerV1 } from "@wraithlight/common.health-checker.sdk-server";
import { LoggerService } from "@wraithlight/common.logger.sdk";
import { ApplicationName } from "@wraithlight/core.auth.constant";
import { CoreEnvironment } from "@wraithlight/core.env.sdk";
import { BaseController } from "@wraithlight/core.node";
import { createNodeServer } from "@wraithlight/core.server";

LoggerService.initialize({
    applicationName: ApplicationName.RemoteConfig
});

const sharedCfg = SharedRemoteConfigConfigReader
    .getInstance(CoreEnvironment.getEnvironmentType())
;

const CONTROLLERS: ReadonlyArray<BaseController> = [
    new HealthCheckControllerV1(
        ApplicationName.RemoteConfig,
        "1.0.0" // TODO: package.json reader
    )
];

createNodeServer(
    ApplicationName.RemoteConfig,
    CONTROLLERS,
    [],
    sharedCfg.get(x => x.server.port),
);
