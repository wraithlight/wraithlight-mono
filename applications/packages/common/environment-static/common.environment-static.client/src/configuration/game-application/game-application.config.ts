import { GameApplicationClient, EnvironmentStatic } from "@wraithlight/core.environment-static.types";
import { EnvironmentType } from "@wraithlight/core.common-constant";

import { CLIENT_LOCAL_GAME_APPLICATION_CONFIG } from "./local";
import { CLIENT_DEV_GAME_APPLICATION_CONFIG } from "./dev";
import { CLIENT_TEST_GAME_APPLICATION_CONFIG } from "./test";

export const CLIENT_GAME_APPLICATION_CONFIG: Readonly<EnvironmentStatic<GameApplicationClient>> = {
    [EnvironmentType.Local]: CLIENT_LOCAL_GAME_APPLICATION_CONFIG,
    [EnvironmentType.Dev]: CLIENT_DEV_GAME_APPLICATION_CONFIG,
    [EnvironmentType.Test]: CLIENT_TEST_GAME_APPLICATION_CONFIG
};
