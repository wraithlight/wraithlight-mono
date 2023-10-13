import { GameWebsiteShared, EnvironmentStatic } from "@wraithlight/core.environment-static.types";
import { EnvironmentType } from "@wraithlight/core.common-constants";

import { SHARED_LOCAL_GAME_WEBSITE_CONFIG } from "./local";
import { SHARED_DEV_GAME_WEBSITE_CONFIG } from "./dev";
import { SHARED_TEST_GAME_WEBSITE_CONFIG } from "./test";
import { SHARED_STAGING_GAME_WEBSITE_CONFIG } from "./staging";
import { SHARED_PRODUCTION_GAME_WEBSITE_CONFIG } from "./production";

export const SHARED_GAME_WEBSITE_CONFIG: Readonly<EnvironmentStatic<GameWebsiteShared>> = {
    [EnvironmentType.Local]: SHARED_LOCAL_GAME_WEBSITE_CONFIG,
    [EnvironmentType.Dev]: SHARED_DEV_GAME_WEBSITE_CONFIG,
    [EnvironmentType.Test]: SHARED_TEST_GAME_WEBSITE_CONFIG,
    [EnvironmentType.Staging]: SHARED_STAGING_GAME_WEBSITE_CONFIG,
    [EnvironmentType.Production]: SHARED_PRODUCTION_GAME_WEBSITE_CONFIG
};
