import { ForumServer, EnvironmentStatic } from "@wraithlight/core.environment-static.types";
import { EnvironmentType } from "@wraithlight/core.common-constant";

import { SERVER_LOCAL_FORUM_CONFIG } from "./local";
import { SERVER_DEV_FORUM_CONFIG } from "./dev";
import { SERVER_TEST_FORUM_CONFIG } from "./test";
import { SERVER_STAGING_FORUM_CONFIG } from "./staging";
import { SERVER_PRODUCTION_FORUM_CONFIG } from "./production";

export const SERVER_FORUM_CONFIG: Readonly<EnvironmentStatic<ForumServer>> = {
    [EnvironmentType.Local]: SERVER_LOCAL_FORUM_CONFIG,
    [EnvironmentType.Dev]: SERVER_DEV_FORUM_CONFIG,
    [EnvironmentType.Test]: SERVER_TEST_FORUM_CONFIG,
    [EnvironmentType.Staging]: SERVER_STAGING_FORUM_CONFIG,
    [EnvironmentType.Production]: SERVER_PRODUCTION_FORUM_CONFIG
};
