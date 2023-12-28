import { EnvironmentType } from "@wraithlight/core.common-constants";
import { EnvironmentStatic, LogsClient } from "@wraithlight/core.environment-static.types";

import { CLIENT_DEV_LOGS_CONFIG } from "./dev";
import { CLIENT_LOCAL_LOGS_CONFIG } from "./local";
import { CLIENT_PRODUCTION_LOGS_CONFIG } from "./production";
import { CLIENT_STAGING_LOGS_CONFIG } from "./staging";
import { CLIENT_TEST_LOGS_CONFIG } from "./test";

export const CLIENT_LOGS_CONFIG: Readonly<EnvironmentStatic<LogsClient>> = {
    [EnvironmentType.Local]: CLIENT_LOCAL_LOGS_CONFIG,
    [EnvironmentType.Dev]: CLIENT_DEV_LOGS_CONFIG,
    [EnvironmentType.Test]: CLIENT_TEST_LOGS_CONFIG,
    [EnvironmentType.Staging]: CLIENT_STAGING_LOGS_CONFIG,
    [EnvironmentType.Production]: CLIENT_PRODUCTION_LOGS_CONFIG
};
