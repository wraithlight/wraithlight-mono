import { CommonServer, EnvironmentStatic } from "@wraithlight/core.environment-static.types";
import { EnvironmentType } from "@wraithlight/core.common-constant";

import { SERVER_LOCAL_COMMON_CONFIG } from "./local";
import { SERVER_DEV_COMMON_CONFIG } from "./dev";
import { SERVER_TEST_COMMON_CONFIG } from "./test";
import { SERVER_STAGING_COMMON_CONFIG } from "./staging";
import { SERVER_PRODUCTION_COMMON_CONFIG } from "./production";

export const SERVER_COMMON_CONFIG: Readonly<EnvironmentStatic<CommonServer>> = {
    [EnvironmentType.Local]: SERVER_LOCAL_COMMON_CONFIG,
    [EnvironmentType.Dev]: SERVER_DEV_COMMON_CONFIG,
    [EnvironmentType.Test]: SERVER_TEST_COMMON_CONFIG,
    [EnvironmentType.Staging]: SERVER_STAGING_COMMON_CONFIG,
    [EnvironmentType.Production]: SERVER_PRODUCTION_COMMON_CONFIG
};
