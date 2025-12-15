import { EnvironmentType } from "@wraithlight/core.env.types";
import { EnvironmentStatic, WebsiteShared } from "@wraithlight/core.environment-static.types";

import { SHARED_DEV_WEBSITE_CONFIG } from "./dev";
import { SHARED_LOCAL_WEBSITE_CONFIG } from "./local";
import { SHARED_PRODUCTION_WEBSITE_CONFIG } from "./production";
import { SHARED_STAGING_WEBSITE_CONFIG } from "./staging";
import { SHARED_TEST_WEBSITE_CONFIG } from "./test";

export const SHARED_WEBSITE_CONFIG: Readonly<
  EnvironmentStatic<WebsiteShared>
> = {
  [EnvironmentType.Local]: SHARED_LOCAL_WEBSITE_CONFIG,
  [EnvironmentType.Dev]: SHARED_DEV_WEBSITE_CONFIG,
  [EnvironmentType.Test]: SHARED_TEST_WEBSITE_CONFIG,
  [EnvironmentType.Staging]: SHARED_STAGING_WEBSITE_CONFIG,
  [EnvironmentType.Production]: SHARED_PRODUCTION_WEBSITE_CONFIG
};
