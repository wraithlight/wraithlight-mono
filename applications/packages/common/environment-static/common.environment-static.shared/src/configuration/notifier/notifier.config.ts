import { WebsiteShared, EnvironmentStatic } from "@wraithlight/core.environment-static.types";
import { EnvironmentType } from "@wraithlight/core.common-constant";

import { SHARED_LOCAL_NOTIFIER_CONFIG } from "./local";
import { SHARED_DEV_NOTIFIER_CONFIG } from "./dev";
import { SHARED_TEST_NOTIFIER_CONFIG } from "./test";

export const SHARED_NOTIFIER_CONFIG: Readonly<EnvironmentStatic<WebsiteShared>> = {
    [EnvironmentType.Local]: SHARED_LOCAL_NOTIFIER_CONFIG,
    [EnvironmentType.Dev]: SHARED_DEV_NOTIFIER_CONFIG,
    [EnvironmentType.Test]: SHARED_TEST_NOTIFIER_CONFIG
};
