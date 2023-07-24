import { ForumClient, EnvironmentStatic } from "@wraithlight/core.environment-static.types";
import { EnvironmentType } from "@wraithlight/core.common-constant";

import { CLIENT_LOCAL_FORUM_CONFIG } from "./local";
import { CLIENT_DEV_FORUM_CONFIG } from "./dev";
import { CLIENT_TEST_FORUM_CONFIG } from "./test";

export const CLIENT_FORUM_CONFIG: Readonly<EnvironmentStatic<ForumClient>> = {
    [EnvironmentType.Local]: CLIENT_LOCAL_FORUM_CONFIG,
    [EnvironmentType.Dev]: CLIENT_DEV_FORUM_CONFIG,
    [EnvironmentType.Test]: CLIENT_TEST_FORUM_CONFIG
};
