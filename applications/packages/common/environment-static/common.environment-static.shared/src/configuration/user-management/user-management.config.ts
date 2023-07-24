import { UserManagementShared, EnvironmentStatic } from "@wraithlight/core.environment-static.types";
import { EnvironmentType } from "@wraithlight/core.common-constant";

import { SHARED_LOCAL_USER_MANAGEMENT_CONFIG } from "./local";
import { SHARED_DEV_USER_MANAGEMENT_CONFIG } from "./dev";
import { SHARED_TEST_USER_MANAGEMENT_CONFIG } from "./test";

export const SHARED_USER_MANAGEMENT_CONFIG: Readonly<EnvironmentStatic<UserManagementShared>> = {
    [EnvironmentType.Local]: SHARED_LOCAL_USER_MANAGEMENT_CONFIG,
    [EnvironmentType.Dev]: SHARED_DEV_USER_MANAGEMENT_CONFIG,
    [EnvironmentType.Test]: SHARED_TEST_USER_MANAGEMENT_CONFIG
};
