import { ForumServer, EnvironmentStatic } from "@wraithlight/core.environment-static.types";
import { EnvironmentType } from "@wraithlight/core.common-constant";

import { SERVER_LOCAL_FORUM_CONFIG } from "./local";
import { SERVER_DEV_FORUM_CONFIG } from "./dev";
import { SERVER_TEST_FORUM_CONFIG } from "./test";

export const SERVER_FORUM_CONFIG: Readonly<EnvironmentStatic<ForumServer>> = {
    [EnvironmentType.Local]: SERVER_LOCAL_FORUM_CONFIG,
    [EnvironmentType.Dev]: SERVER_DEV_FORUM_CONFIG,
    [EnvironmentType.Test]: SERVER_TEST_FORUM_CONFIG
};
