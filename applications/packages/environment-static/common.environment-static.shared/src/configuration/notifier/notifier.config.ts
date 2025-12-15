import { EnvironmentType } from "@wraithlight/core.env.types";
import { EnvironmentStatic, NotifierShared } from "@wraithlight/core.environment-static.types";

import { SHARED_DEV_NOTIFIER_CONFIG } from "./dev";
import { SHARED_LOCAL_NOTIFIER_CONFIG } from "./local";
import { SHARED_PRODUCTION_NOTIFIER_CONFIG } from "./production";
import { SHARED_STAGING_NOTIFIER_CONFIG } from "./staging";
import { SHARED_TEST_NOTIFIER_CONFIG } from "./test";

export const SHARED_NOTIFIER_CONFIG: Readonly<
  EnvironmentStatic<NotifierShared>
> = {
  [EnvironmentType.Local]: SHARED_LOCAL_NOTIFIER_CONFIG,
  [EnvironmentType.Dev]: SHARED_DEV_NOTIFIER_CONFIG,
  [EnvironmentType.Test]: SHARED_TEST_NOTIFIER_CONFIG,
  [EnvironmentType.Staging]: SHARED_STAGING_NOTIFIER_CONFIG,
  [EnvironmentType.Production]: SHARED_PRODUCTION_NOTIFIER_CONFIG
};
