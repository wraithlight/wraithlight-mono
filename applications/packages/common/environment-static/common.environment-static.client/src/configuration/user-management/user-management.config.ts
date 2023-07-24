import { UserManagementClient, EnvironmentStatic } from "@wraithlight/core.environment-static.types";
import { EnvironmentType } from "@wraithlight/core.common-constant";

import { CLIENT_LOCAL_USER_MANAGEMENT_CONFIG } from "./local";
import { CLIENT_DEV_USER_MANAGEMENT_CONFIG } from "./dev";
import { CLIENT_TEST_USER_MANAGEMENT_CONFIG } from "./test";

export const CLIENT_USER_MANAGEMENT_CONFIG: Readonly<EnvironmentStatic<UserManagementClient>> = {
    [EnvironmentType.Local]: CLIENT_LOCAL_USER_MANAGEMENT_CONFIG,
    [EnvironmentType.Dev]: CLIENT_DEV_USER_MANAGEMENT_CONFIG,
    [EnvironmentType.Test]: CLIENT_TEST_USER_MANAGEMENT_CONFIG
};
