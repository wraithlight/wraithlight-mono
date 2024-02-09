import { EnvironmentType } from "@wraithlight/core.common-constants";
import { EnvironmentStatic, LogsCollectorClient } from "@wraithlight/core.environment-static.types";

import { CLIENT_DEV_LOGS_COLLECTOR_CONFIG } from "./dev";
import { CLIENT_LOCAL_LOGS_COLLECTOR_CONFIG } from "./local";
import { CLIENT_PRODUCTION_LOGS_COLLECTOR_CONFIG } from "./production";
import { CLIENT_STAGING_LOGS_COLLECTOR_CONFIG } from "./staging";
import { CLIENT_TEST_LOGS_COLLECTOR_CONFIG } from "./test";

export const CLIENT_LOGS_COLLECTOR_CONFIG: Readonly<EnvironmentStatic<LogsCollectorClient>> = {
    [EnvironmentType.Local]: CLIENT_LOCAL_LOGS_COLLECTOR_CONFIG,
    [EnvironmentType.Dev]: CLIENT_DEV_LOGS_COLLECTOR_CONFIG,
    [EnvironmentType.Test]: CLIENT_TEST_LOGS_COLLECTOR_CONFIG,
    [EnvironmentType.Staging]: CLIENT_STAGING_LOGS_COLLECTOR_CONFIG,
    [EnvironmentType.Production]: CLIENT_PRODUCTION_LOGS_COLLECTOR_CONFIG
};
