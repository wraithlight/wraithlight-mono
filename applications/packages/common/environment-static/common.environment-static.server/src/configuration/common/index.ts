import { CommonServer, EnvironmentStatic } from "@wraithlight/core.environment-static.types";
import { EnvironmentType } from "@wraithlight/core.common-constant";

import { SERVER_LOCAL_COMMON_CONFIG } from "./local";
import { SERVER_DEV_COMMON_CONFIG } from "./dev";
import { SERVER_TEST_COMMON_CONFIG } from "./test";

export const SERVER_COMMON_CONFIG: Readonly<EnvironmentStatic<CommonServer>> = {
    [EnvironmentType.Local]: SERVER_LOCAL_COMMON_CONFIG,
    [EnvironmentType.Dev]: SERVER_DEV_COMMON_CONFIG,
    [EnvironmentType.Test]: SERVER_TEST_COMMON_CONFIG
};
