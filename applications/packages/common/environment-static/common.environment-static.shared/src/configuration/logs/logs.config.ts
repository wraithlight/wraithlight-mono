import { LogsShared, EnvironmentStatic } from "@wraithlight/core.environment-static.types";
import { EnvironmentType } from "@wraithlight/core.common-constant";

import { SHARED_LOCAL_LOGS_CONFIG } from "./local";
import { SHARED_DEV_LOGS_CONFIG } from "./dev";
import { SHARED_TEST_LOGS_CONFIG } from "./test";

export const SHARED_LOGS_CONFIG: Readonly<EnvironmentStatic<LogsShared>> = {
    [EnvironmentType.Local]: SHARED_LOCAL_LOGS_CONFIG,
    [EnvironmentType.Dev]: SHARED_DEV_LOGS_CONFIG,
    [EnvironmentType.Test]: SHARED_TEST_LOGS_CONFIG
};
