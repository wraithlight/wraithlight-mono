import { LogsServer, EnvironmentStatic } from "@wraithlight/core.environment-static.types";
import { EnvironmentType } from "@wraithlight/core.common-constant";

import { SERVER_LOCAL_LOGS_CONFIG } from "./local";
import { SERVER_DEV_LOGS_CONFIG } from "./dev";
import { SERVER_TEST_LOGS_CONFIG } from "./test";
import { SERVER_STAGING_LOGS_CONFIG } from "./staging";
import { SERVER_PRODUCTION_LOGS_CONFIG } from "./production";

export const SERVER_LOGS_CONFIG: Readonly<EnvironmentStatic<LogsServer>> = {
    [EnvironmentType.Local]: SERVER_LOCAL_LOGS_CONFIG,
    [EnvironmentType.Dev]: SERVER_DEV_LOGS_CONFIG,
    [EnvironmentType.Test]: SERVER_TEST_LOGS_CONFIG,
    [EnvironmentType.Staging]: SERVER_STAGING_LOGS_CONFIG,
    [EnvironmentType.Production]: SERVER_PRODUCTION_LOGS_CONFIG
};
