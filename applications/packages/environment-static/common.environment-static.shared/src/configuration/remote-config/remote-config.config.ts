import { EnvironmentType } from "@wraithlight/core.env.types";
import { EnvironmentStatic, RemoteConfigShared } from "@wraithlight/core.environment-static.types";

import { SHARED_DEV_REMOTE_CONFIG_CONFIG } from "./dev";
import { SHARED_LOCAL_REMOTE_CONFIG_CONFIG } from "./local";
import { SHARED_PRODUCTION_REMOTE_CONFIG_CONFIG } from "./production";
import { SHARED_STAGING_REMOTE_CONFIG_CONFIG } from "./staging";
import { SHARED_TEST_REMOTE_CONFIG_CONFIG } from "./test";

export const SHARED_REMOTE_CONFIG_CONFIG: Readonly<
  EnvironmentStatic<RemoteConfigShared>
> = {
  [EnvironmentType.Local]: SHARED_LOCAL_REMOTE_CONFIG_CONFIG,
  [EnvironmentType.Dev]: SHARED_DEV_REMOTE_CONFIG_CONFIG,
  [EnvironmentType.Test]: SHARED_TEST_REMOTE_CONFIG_CONFIG,
  [EnvironmentType.Staging]: SHARED_STAGING_REMOTE_CONFIG_CONFIG,
  [EnvironmentType.Production]: SHARED_PRODUCTION_REMOTE_CONFIG_CONFIG
};
