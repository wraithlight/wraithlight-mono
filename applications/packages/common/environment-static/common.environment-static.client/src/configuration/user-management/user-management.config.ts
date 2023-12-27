import { EnvironmentType } from "@wraithlight/core.common-constants";
import { UserManagementClient, EnvironmentStatic } from "@wraithlight/core.environment-static.types";

import { CLIENT_DEV_USER_MANAGEMENT_CONFIG } from "./dev";
import { CLIENT_LOCAL_USER_MANAGEMENT_CONFIG } from "./local";
import { CLIENT_PRODUCTION_USER_MANAGEMENT_CONFIG } from "./production";
import { CLIENT_STAGING_USER_MANAGEMENT_CONFIG } from "./staging";
import { CLIENT_TEST_USER_MANAGEMENT_CONFIG } from "./test";

export const CLIENT_USER_MANAGEMENT_CONFIG: Readonly<EnvironmentStatic<UserManagementClient>> = {
    [EnvironmentType.Local]: CLIENT_LOCAL_USER_MANAGEMENT_CONFIG,
    [EnvironmentType.Dev]: CLIENT_DEV_USER_MANAGEMENT_CONFIG,
    [EnvironmentType.Test]: CLIENT_TEST_USER_MANAGEMENT_CONFIG,
    [EnvironmentType.Staging]: CLIENT_STAGING_USER_MANAGEMENT_CONFIG,
    [EnvironmentType.Production]: CLIENT_PRODUCTION_USER_MANAGEMENT_CONFIG
};
