import { EnvironmentType } from "@wraithlight/core.env.types";
import { EnvironmentStatic, ForumServer } from "@wraithlight/core.environment-static.types";

import { SERVER_DEV_FORUM_CONFIG } from "./dev";
import { SERVER_LOCAL_FORUM_CONFIG } from "./local";
import { SERVER_PRODUCTION_FORUM_CONFIG } from "./production";
import { SERVER_STAGING_FORUM_CONFIG } from "./staging";
import { SERVER_TEST_FORUM_CONFIG } from "./test";

export const SERVER_FORUM_CONFIG: Readonly<
    EnvironmentStatic<ForumServer>
    > = {
    [EnvironmentType.Local]: SERVER_LOCAL_FORUM_CONFIG,
    [EnvironmentType.Dev]: SERVER_DEV_FORUM_CONFIG,
    [EnvironmentType.Test]: SERVER_TEST_FORUM_CONFIG,
    [EnvironmentType.Staging]: SERVER_STAGING_FORUM_CONFIG,
    [EnvironmentType.Production]: SERVER_PRODUCTION_FORUM_CONFIG
};
