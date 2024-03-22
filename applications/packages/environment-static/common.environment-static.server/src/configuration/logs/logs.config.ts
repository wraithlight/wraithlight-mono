import { EnvironmentType } from "@wraithlight/core.env.types";
import { EnvironmentStatic, LogsServer } from "@wraithlight/core.environment-static.types";

import { SERVER_DEV_LOGS_CONFIG } from "./dev";
import { SERVER_LOCAL_LOGS_CONFIG } from "./local";
import { SERVER_PRODUCTION_LOGS_CONFIG } from "./production";
import { SERVER_STAGING_LOGS_CONFIG } from "./staging";
import { SERVER_TEST_LOGS_CONFIG } from "./test";

export const SERVER_LOGS_CONFIG: Readonly<
    EnvironmentStatic<LogsServer>
    > = {
    [EnvironmentType.Local]: SERVER_LOCAL_LOGS_CONFIG,
    [EnvironmentType.Dev]: SERVER_DEV_LOGS_CONFIG,
    [EnvironmentType.Test]: SERVER_TEST_LOGS_CONFIG,
    [EnvironmentType.Staging]: SERVER_STAGING_LOGS_CONFIG,
    [EnvironmentType.Production]: SERVER_PRODUCTION_LOGS_CONFIG
};
