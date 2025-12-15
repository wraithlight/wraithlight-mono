import { EnvironmentType } from "@wraithlight/core.env.types";
import { EnvironmentStatic, GameApplicationShared } from "@wraithlight/core.environment-static.types";

import { SHARED_DEV_GAME_APPLICATION_CONFIG } from "./dev";
import { SHARED_LOCAL_GAME_APPLICATION_CONFIG } from "./local";
import { SHARED_PRODUCTION_GAME_APPLICATION_CONFIG } from "./production";
import { SHARED_STAGING_GAME_APPLICATION_CONFIG } from "./staging";
import { SHARED_TEST_GAME_APPLICATION_CONFIG } from "./test";

export const SHARED_GAME_APPLICATION_CONFIG: Readonly<
  EnvironmentStatic<GameApplicationShared>
> = {
  [EnvironmentType.Local]: SHARED_LOCAL_GAME_APPLICATION_CONFIG,
  [EnvironmentType.Dev]: SHARED_DEV_GAME_APPLICATION_CONFIG,
  [EnvironmentType.Test]: SHARED_TEST_GAME_APPLICATION_CONFIG,
  [EnvironmentType.Staging]: SHARED_STAGING_GAME_APPLICATION_CONFIG,
  [EnvironmentType.Production]: SHARED_PRODUCTION_GAME_APPLICATION_CONFIG
};
