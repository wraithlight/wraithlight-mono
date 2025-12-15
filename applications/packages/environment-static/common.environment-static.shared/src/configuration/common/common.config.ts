import { EnvironmentType } from "@wraithlight/core.env.types";
import {
  CommonShared,
  EnvironmentStatic
} from "@wraithlight/core.environment-static.types";

import { SHARED_DEV_COMMON_CONFIG } from "./dev";
import { SHARED_LOCAL_COMMON_CONFIG } from "./local";
import { SHARED_PRODUCTION_COMMON_CONFIG } from "./production";
import { SHARED_STAGING_COMMON_CONFIG } from "./staging";
import { SHARED_TEST_COMMON_CONFIG } from "./test";

export const SHARED_COMMON_CONFIG: Readonly<
  EnvironmentStatic<CommonShared>
> = {
  [EnvironmentType.Local]: SHARED_LOCAL_COMMON_CONFIG,
  [EnvironmentType.Dev]: SHARED_DEV_COMMON_CONFIG,
  [EnvironmentType.Test]: SHARED_TEST_COMMON_CONFIG,
  [EnvironmentType.Staging]: SHARED_STAGING_COMMON_CONFIG,
  [EnvironmentType.Production]: SHARED_PRODUCTION_COMMON_CONFIG
};
