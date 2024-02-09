import { ServerAuthControllerV1 } from "@wraithlight/common.auth-sdk.server";
import { SharedLogsCollectorConfigReader } from "@wraithlight/common.environment-static.shared";
import { LoginScope } from "@wraithlight/core.auth.types";
import { ApplicationName } from "@wraithlight/core.common-constants";
import { CoreEnvironment } from "@wraithlight/core.env";
import { BaseController } from "@wraithlight/core.node";
import { createNodeServer } from "@wraithlight/core.server";

import { ApplicationController, LogController, TokenController } from "./controller";

const sharedCfg = SharedLogsCollectorConfigReader
    .getInstance(CoreEnvironment.getEnvironmentType());

const CONTROLLERS: ReadonlyArray<BaseController> = [
    new ServerAuthControllerV1(LoginScope.LogsCollector),
    new LogController(),
    new ApplicationController(),
    new TokenController()
];

createNodeServer(
    ApplicationName.LogsCollector,
    CONTROLLERS,
    sharedCfg.get(x => x.server.port),
);
