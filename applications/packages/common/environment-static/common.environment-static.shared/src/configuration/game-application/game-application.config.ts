import { GameApplicationShared, EnvironmentStatic } from "@wraithlight/core.environment-static.types";
import { EnvironmentType } from "@wraithlight/core.common-constant";

import { SHARED_LOCAL_GAME_APPLICATION_CONFIG } from "./local";
import { SHARED_DEV_GAME_APPLICATION_CONFIG } from "./dev";
import { SHARED_TEST_GAME_APPLICATION_CONFIG } from "./test";

export const SHARED_GAME_APPLICATION_CONFIG: Readonly<EnvironmentStatic<GameApplicationShared>> = {
    [EnvironmentType.Local]: SHARED_LOCAL_GAME_APPLICATION_CONFIG,
    [EnvironmentType.Dev]: SHARED_DEV_GAME_APPLICATION_CONFIG,
    [EnvironmentType.Test]: SHARED_TEST_GAME_APPLICATION_CONFIG
};
