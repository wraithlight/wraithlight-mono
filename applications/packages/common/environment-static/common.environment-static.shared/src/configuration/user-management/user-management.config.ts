import { UserManagementShared, EnvironmentStatic } from "@wraithlight/core.environment-static.types";
import { EnvironmentType } from "@wraithlight/core.common-constant";

import { SHARED_LOCAL_USER_MANAGEMENT_CONFIG } from "./local";
import { SHARED_DEV_USER_MANAGEMENT_CONFIG } from "./dev";
import { SHARED_TEST_USER_MANAGEMENT_CONFIG } from "./test";
import { SHARED_STAGING_USER_MANAGEMENT_CONFIG } from "./staging";
import { SHARED_PRODUCTION_USER_MANAGEMENT_CONFIG } from "./production";

export const SHARED_USER_MANAGEMENT_CONFIG: Readonly<EnvironmentStatic<UserManagementShared>> = {
    [EnvironmentType.Local]: SHARED_LOCAL_USER_MANAGEMENT_CONFIG,
    [EnvironmentType.Dev]: SHARED_DEV_USER_MANAGEMENT_CONFIG,
    [EnvironmentType.Test]: SHARED_TEST_USER_MANAGEMENT_CONFIG,
    [EnvironmentType.Staging]: SHARED_STAGING_USER_MANAGEMENT_CONFIG,
    [EnvironmentType.Production]: SHARED_PRODUCTION_USER_MANAGEMENT_CONFIG
};
