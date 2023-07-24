import { ForumShared, EnvironmentStatic } from "@wraithlight/core.environment-static.types";
import { EnvironmentType } from "@wraithlight/core.common-constant";

import { SHARED_LOCAL_FORUM_CONFIG } from "./local";
import { SHARED_DEV_FORUM_CONFIG } from "./dev";
import { SHARED_TEST_FORUM_CONFIG } from "./test";

export const SHARED_FORUM_CONFIG: Readonly<EnvironmentStatic<ForumShared>> = {
    [EnvironmentType.Local]: SHARED_LOCAL_FORUM_CONFIG,
    [EnvironmentType.Dev]: SHARED_DEV_FORUM_CONFIG,
    [EnvironmentType.Test]: SHARED_TEST_FORUM_CONFIG
};
