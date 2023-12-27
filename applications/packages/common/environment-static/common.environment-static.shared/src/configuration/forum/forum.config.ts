import { EnvironmentType } from "@wraithlight/core.common-constants";
import { EnvironmentStatic, ForumShared } from "@wraithlight/core.environment-static.types";

import { SHARED_DEV_FORUM_CONFIG } from "./dev";
import { SHARED_LOCAL_FORUM_CONFIG } from "./local";
import { SHARED_PRODUCTION_FORUM_CONFIG } from "./production";
import { SHARED_STAGING_FORUM_CONFIG } from "./staging";
import { SHARED_TEST_FORUM_CONFIG } from "./test";

export const SHARED_FORUM_CONFIG: Readonly<EnvironmentStatic<ForumShared>> = {
    [EnvironmentType.Local]: SHARED_LOCAL_FORUM_CONFIG,
    [EnvironmentType.Dev]: SHARED_DEV_FORUM_CONFIG,
    [EnvironmentType.Test]: SHARED_TEST_FORUM_CONFIG,
    [EnvironmentType.Staging]: SHARED_STAGING_FORUM_CONFIG,
    [EnvironmentType.Production]: SHARED_PRODUCTION_FORUM_CONFIG
};
