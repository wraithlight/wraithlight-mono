import { SharedLogsConfigReader } from "@wraithlight/common.environment-static.shared";
import { ApplicationName } from "@wraithlight/core.common-constant";
import { createNodeServer } from "@wraithlight/core.server";
import { getEnvironment } from "@wraithlight/core.env";

import { LogsEntryController } from "./controller";

const sharedCfg = SharedLogsConfigReader.getInstance(getEnvironment());

const CONTROLLERS = [
    new LogsEntryController()
];

createNodeServer(
    ApplicationName.Website,
    CONTROLLERS,
    sharedCfg.get(x => x.server.port),
);
