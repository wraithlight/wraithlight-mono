import { SharedLogsConfigReader } from "@wraithlight/common.environment-static.shared";
import { HealthCheckControllerV1 } from "@wraithlight/common.health-checker.sdk-server";
import { LoggerService } from "@wraithlight/common.logger.sdk";
import { ApplicationName } from "@wraithlight/core.auth.constant";
import { CoreEnvironment } from "@wraithlight/core.env.sdk";
import { createNodeServer } from "@wraithlight/core.server";

import { LogsEntryController } from "./controller";

LoggerService.initialize({
    applicationName: ApplicationName.Logs
});

const sharedCfg = SharedLogsConfigReader
    .getInstance(CoreEnvironment.getEnvironmentType())
;

const CONTROLLERS = [
    new LogsEntryController(),
    new HealthCheckControllerV1(
        ApplicationName.Logs,
        "1.0.0" // TODO: Package JSON reader
    )
];

createNodeServer(
    ApplicationName.Logs,
    CONTROLLERS,
    [],
    sharedCfg.get(x => x.server.port),
);
