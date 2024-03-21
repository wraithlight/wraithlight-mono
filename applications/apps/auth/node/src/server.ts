import { join } from "path";

import { ServerAuthControllerV1 } from "@wraithlight/common.auth-sdk.server";
import { ServerUserManagementConfigReader } from "@wraithlight/common.environment-static.server";
import { SharedUserManagementConfigReader } from "@wraithlight/common.environment-static.shared";
import { HealthCheckControllerV1 } from "@wraithlight/common.health-checker.sdk-server";
import { ApplicationName } from "@wraithlight/core.auth.constant";
import { LoginScope } from "@wraithlight/core.auth.types";
import { CoreEnvironment } from "@wraithlight/core.env.sdk";
import { createNodeServer } from "@wraithlight/core.server";

import { AccountControllerV2, SessionControllerV2 } from "./controller";

const serverCfg = ServerUserManagementConfigReader.getInstance(CoreEnvironment.getEnvironmentType());
const sharedCfg = SharedUserManagementConfigReader.getInstance(CoreEnvironment.getEnvironmentType());

// TOOD: Remove this
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _healthCheckToken = serverCfg.getCommon(x => x.healthChecker.tokens.userManagement);

const CONTROLLERS = [
    new ServerAuthControllerV1(LoginScope.UserManagement),
    new AccountControllerV2(),
    new SessionControllerV2(),
    new HealthCheckControllerV1("auth", "1.0.0")                // TODO: Package JSON reader
];

const frontendPath = serverCfg.getCommon(x => x.files.frontend.static);

createNodeServer(
    ApplicationName.UserManagement,
    CONTROLLERS,
    [],
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
