import { SharedLogsCollectorConfigReader } from "@wraithlight/common.environment-static.shared";
import { ApplicationName } from "@wraithlight/core.common-constants";
import { CoreEnvironment } from "@wraithlight/core.env";
import { createNodeServer } from "@wraithlight/core.server";
import { BaseController } from "@wraithlight/core/core.node";
import { ServerAuthControllerV1 } from "@wraithlight/common.auth-sdk.server";
import { LoginScope } from "@wraithlight/core.auth.types";

import { ApplicationController, LogController, TokenController } from "./controller";

const sharedCfg = SharedLogsCollectorConfigReader.getInstance(CoreEnvironment.getEnvironmentType());

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
