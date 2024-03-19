import { EnvironmentType } from "@wraithlight/core.env.types";
import { EnvironmentStatic, UserManagementServer } from "@wraithlight/core.environment-static.types";

import { SERVER_DEV_USER_MANAGEMENT_CONFIG } from "./dev";
import { SERVER_LOCAL_USER_MANAGEMENT_CONFIG } from "./local";
import { SERVER_PRODUCTION_USER_MANAGEMENT_CONFIG } from "./production";
import { SERVER_STAGING_USER_MANAGEMENT_CONFIG } from "./staging";
import { SERVER_TEST_USER_MANAGEMENT_CONFIG } from "./test";

export const SERVER_USER_MANAGEMENT_CONFIG: Readonly<EnvironmentStatic<UserManagementServer>> = {
    [EnvironmentType.Local]: SERVER_LOCAL_USER_MANAGEMENT_CONFIG,
    [EnvironmentType.Dev]: SERVER_DEV_USER_MANAGEMENT_CONFIG,
    [EnvironmentType.Test]: SERVER_TEST_USER_MANAGEMENT_CONFIG,
    [EnvironmentType.Staging]: SERVER_STAGING_USER_MANAGEMENT_CONFIG,
    [EnvironmentType.Production]: SERVER_PRODUCTION_USER_MANAGEMENT_CONFIG
};
