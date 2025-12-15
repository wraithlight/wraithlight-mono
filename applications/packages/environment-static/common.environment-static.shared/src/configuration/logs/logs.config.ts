import { EnvironmentType } from "@wraithlight/core.env.types";
import { EnvironmentStatic, LogsShared } from "@wraithlight/core.environment-static.types";

import { SHARED_DEV_LOGS_CONFIG } from "./dev";
import { SHARED_LOCAL_LOGS_CONFIG } from "./local";
import { SHARED_PRODUCTION_LOGS_CONFIG } from "./production";
import { SHARED_STAGING_LOGS_CONFIG } from "./staging";
import { SHARED_TEST_LOGS_CONFIG } from "./test";

export const SHARED_LOGS_CONFIG: Readonly<
  EnvironmentStatic<LogsShared>
> = {
  [EnvironmentType.Local]: SHARED_LOCAL_LOGS_CONFIG,
  [EnvironmentType.Dev]: SHARED_DEV_LOGS_CONFIG,
  [EnvironmentType.Test]: SHARED_TEST_LOGS_CONFIG,
  [EnvironmentType.Staging]: SHARED_STAGING_LOGS_CONFIG,
  [EnvironmentType.Production]: SHARED_PRODUCTION_LOGS_CONFIG
};
