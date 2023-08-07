import { GameWebsiteClient, EnvironmentStatic } from "@wraithlight/core.environment-static.types";
import { EnvironmentType } from "@wraithlight/core.common-constant";

import { CLIENT_LOCAL_GAME_WEBSITE_CONFIG } from "./local";
import { CLIENT_DEV_GAME_WEBSITE_CONFIG } from "./dev";
import { CLIENT_TEST_GAME_WEBSITE_CONFIG } from "./test";
import { CLIENT_STAGING_GAME_WEBSITE_CONFIG } from "./staging";
import { CLIENT_PRODUCTION_GAME_WEBSITE_CONFIG } from "./production";

export const CLIENT_GAME_WEBSITE_CONFIG: Readonly<EnvironmentStatic<GameWebsiteClient>> = {
    [EnvironmentType.Local]: CLIENT_LOCAL_GAME_WEBSITE_CONFIG,
    [EnvironmentType.Dev]: CLIENT_DEV_GAME_WEBSITE_CONFIG,
    [EnvironmentType.Test]: CLIENT_TEST_GAME_WEBSITE_CONFIG,
    [EnvironmentType.Staging]: CLIENT_STAGING_GAME_WEBSITE_CONFIG,
    [EnvironmentType.Production]: CLIENT_PRODUCTION_GAME_WEBSITE_CONFIG
};
