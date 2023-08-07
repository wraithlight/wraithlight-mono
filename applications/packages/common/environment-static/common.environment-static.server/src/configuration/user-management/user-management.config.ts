import { UserManagementServer, EnvironmentStatic } from "@wraithlight/core.environment-static.types";
import { EnvironmentType } from "@wraithlight/core.common-constant";

import { SERVER_LOCAL_USER_MANAGEMENT_CONFIG } from "./local";
import { SERVER_DEV_USER_MANAGEMENT_CONFIG } from "./dev";
import { SERVER_TEST_USER_MANAGEMENT_CONFIG } from "./test";
import { SERVER_STAGING_USER_MANAGEMENT_CONFIG } from "./staging";
import { SERVER_PRODUCTION_USER_MANAGEMENT_CONFIG } from "./production";

export const SERVER_USER_MANAGEMENT_CONFIG: Readonly<EnvironmentStatic<UserManagementServer>> = {
    [EnvironmentType.Local]: SERVER_LOCAL_USER_MANAGEMENT_CONFIG,
    [EnvironmentType.Dev]: SERVER_DEV_USER_MANAGEMENT_CONFIG,
    [EnvironmentType.Test]: SERVER_TEST_USER_MANAGEMENT_CONFIG,
    [EnvironmentType.Staging]: SERVER_STAGING_USER_MANAGEMENT_CONFIG,
    [EnvironmentType.Production]: SERVER_PRODUCTION_USER_MANAGEMENT_CONFIG
};
