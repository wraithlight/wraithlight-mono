import { EnvironmentType } from "@wraithlight/core.env.types";
import { CommonClient, EnvironmentStatic } from "@wraithlight/core.environment-static.types";

import { CLIENT_DEV_COMMON_CONFIG } from "./dev";
import { CLIENT_LOCAL_COMMON_CONFIG } from "./local";
import { CLIENT_PRODUCTION_COMMON_CONFIG } from "./production";
import { CLIENT_STAGING_COMMON_CONFIG } from "./staging";
import { CLIENT_TEST_COMMON_CONFIG } from "./test";

export const CLIENT_COMMON_CONFIG: Readonly<
    EnvironmentStatic<CommonClient>
    > = {
    [EnvironmentType.Local]: CLIENT_DEV_COMMON_CONFIG,
    [EnvironmentType.Dev]: CLIENT_LOCAL_COMMON_CONFIG,
    [EnvironmentType.Test]: CLIENT_PRODUCTION_COMMON_CONFIG,
    [EnvironmentType.Staging]: CLIENT_STAGING_COMMON_CONFIG,
    [EnvironmentType.Production]: CLIENT_TEST_COMMON_CONFIG
};
