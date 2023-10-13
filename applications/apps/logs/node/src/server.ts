import { SharedLogsConfigReader } from "@wraithlight/common.environment-static.shared";
import { ApplicationName } from "@wraithlight/core.common-constants";
import { createNodeServer } from "@wraithlight/core.server";
import { getEnvironmentType } from "@wraithlight/core.env";

import { LogsEntryController } from "./controller";

const sharedCfg = SharedLogsConfigReader.getInstance(getEnvironmentType());

const CONTROLLERS = [
    new LogsEntryController()
];

createNodeServer(
    ApplicationName.Logs,
    CONTROLLERS,
    sharedCfg.get(x => x.server.port),
);
