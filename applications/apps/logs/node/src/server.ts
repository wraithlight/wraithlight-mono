import { SharedLogsConfigReader } from "@wraithlight/common.environment-static.shared";
import { HealthCheckControllerV1 } from "@wraithlight/common.health-checker.sdk-server";
import { ApplicationName } from "@wraithlight/core.auth.constant";
import { CoreEnvironment } from "@wraithlight/core.env.sdk";
import { createNodeServer } from "@wraithlight/core.server";

import { LogsEntryController } from "./controller";

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
