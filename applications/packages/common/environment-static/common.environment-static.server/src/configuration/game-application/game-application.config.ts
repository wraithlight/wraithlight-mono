import { GameApplicationServer, EnvironmentStatic } from "@wraithlight/core.environment-static.types";
import { EnvironmentType } from "@wraithlight/core.common-constants";

import { SERVER_LOCAL_GAME_APPLICATION_CONFIG } from "./local";
import { SERVER_DEV_GAME_APPLICATION_CONFIG } from "./dev";
import { SERVER_TEST_GAME_APPLICATION_CONFIG } from "./test";
import { SERVER_STAGING_GAME_APPLICATION_CONFIG } from "./staging";
import { SERVER_PRODUCTION_GAME_APPLICATION_CONFIG } from "./production";

export const SERVER_GAME_APPLICATION_CONFIG: Readonly<EnvironmentStatic<GameApplicationServer>> = {
    [EnvironmentType.Local]: SERVER_LOCAL_GAME_APPLICATION_CONFIG,
    [EnvironmentType.Dev]: SERVER_DEV_GAME_APPLICATION_CONFIG,
    [EnvironmentType.Test]: SERVER_TEST_GAME_APPLICATION_CONFIG,
    [EnvironmentType.Staging]: SERVER_STAGING_GAME_APPLICATION_CONFIG,
    [EnvironmentType.Production]: SERVER_PRODUCTION_GAME_APPLICATION_CONFIG
};
