import { EnvironmentType } from "@wraithlight/core.common-constants";
import {
    EnvironmentStatic,
    LogsCollectorShared
} from "@wraithlight/core.environment-static.types";

import { SHARED_DEV_LOGS_COLLECTOR_CONFIG } from "./dev";
import { SHARED_LOCAL_LOGS_COLLECTOR_CONFIG } from "./local";
import { SHARED_PRODUCTION_LOGS_COLLECTOR_CONFIG } from "./production";
import { SHARED_STAGING_LOGS_COLLECTOR_CONFIG } from "./staging";
import { SHARED_TEST_LOGS_COLLECTOR_CONFIG } from "./test";

export const SHARED_LOGS_COLLECTOR_CONFIG: Readonly<EnvironmentStatic<LogsCollectorShared>> = {
    [EnvironmentType.Local]: SHARED_DEV_LOGS_COLLECTOR_CONFIG,
    [EnvironmentType.Dev]: SHARED_LOCAL_LOGS_COLLECTOR_CONFIG,
    [EnvironmentType.Test]: SHARED_PRODUCTION_LOGS_COLLECTOR_CONFIG,
    [EnvironmentType.Staging]: SHARED_STAGING_LOGS_COLLECTOR_CONFIG,
    [EnvironmentType.Production]: SHARED_TEST_LOGS_COLLECTOR_CONFIG
};
