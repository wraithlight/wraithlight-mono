import { ServerUserManagementConfigReader } from "@wraithlight/common.environment-static.server";
import { SharedUserManagementConfigReader } from "@wraithlight/common.environment-static.shared";
import { ApplicationName } from "@wraithlight/core.common-constants";
import { createNodeServer } from "@wraithlight/core.server";
import { CoreEnvironment } from "@wraithlight/core.env";
import { HealthCheckControllerV1 } from "@wraithlight/common.health-checker.sdk-server";
import { join } from "path";

import { AccountControllerV2, SessionControllerV2 } from "./controller";

const serverCfg = ServerUserManagementConfigReader.getInstance(CoreEnvironment.getEnvironmentType());
const sharedCfg = SharedUserManagementConfigReader.getInstance(CoreEnvironment.getEnvironmentType());

const healthCheckToken = serverCfg.getCommon(x => x.healthChecker.tokens.userManagement);

// TODO: Add `ServerAuthControllerV1`
const CONTROLLERS = [
    new AccountControllerV2(),
    new SessionControllerV2(),
    new HealthCheckControllerV1(healthCheckToken)
];

const frontendPath = serverCfg.getCommon(x => x.files.frontend.static);

createNodeServer(
    ApplicationName.UserManagement,
    CONTROLLERS,
    sharedCfg.get(x => x.server.port),
    [
        {
            path: serverCfg.getCommon(x => x.paths.base),
            staticPath: join(__dirname, frontendPath)
        },
        {
            path: serverCfg.getCommon(x => x.paths.wildcard),
            staticPath: join(__dirname, frontendPath)
        }
    ]
);
