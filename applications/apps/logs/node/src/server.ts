import { SharedLogsConfigReader } from "@wraithlight/common.environment-static.shared";
import { ApplicationName } from "@wraithlight/core.auth.constant";
import { CoreEnvironment } from "@wraithlight/core.env.sdk";
import { createNodeServer } from "@wraithlight/core.server";

import { LogsEntryController } from "./controller";

const sharedCfg = SharedLogsConfigReader
    .getInstance(CoreEnvironment.getEnvironmentType())
;

const CONTROLLERS = [
    new LogsEntryController()
];

createNodeServer(
    ApplicationName.Logs,
    CONTROLLERS,
    [],
    sharedCfg.get(x => x.server.port),
);
