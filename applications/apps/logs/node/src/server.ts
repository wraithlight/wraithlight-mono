import { SharedLogsConfigReader } from "@wraithlight/common.environment-static.shared";
import { ApplicationName } from "@wraithlight/core.common-constants";
import { CoreEnvironment } from "@wraithlight/core.env";
import { createNodeServerV2 } from "@wraithlight/core.server";

import { LogsEntryController } from "./controller";

const sharedCfg = SharedLogsConfigReader.getInstance(CoreEnvironment.getEnvironmentType());

const CONTROLLERS = [
    new LogsEntryController()
];

createNodeServerV2(
    ApplicationName.Logs,
    CONTROLLERS,
    [],
    sharedCfg.get(x => x.server.port),
);
