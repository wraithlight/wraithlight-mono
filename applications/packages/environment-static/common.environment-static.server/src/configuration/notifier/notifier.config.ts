import { EnvironmentType } from "@wraithlight/core.common-constants";
import { EnvironmentStatic, NotifierServer } from "@wraithlight/core.environment-static.types";

import { SERVER_DEV_NOTIFIER_CONFIG } from "./dev";
import { SERVER_LOCAL_NOTIFIER_CONFIG } from "./local";
import { SERVER_PRODUCTION_NOTIFIER_CONFIG } from "./production";
import { SERVER_STAGING_NOTIFIER_CONFIG } from "./staging";
import { SERVER_TEST_NOTIFIER_CONFIG } from "./test";

export const SERVER_NOTIFIER_CONFIG: Readonly<EnvironmentStatic<NotifierServer>> = {
    [EnvironmentType.Local]: SERVER_LOCAL_NOTIFIER_CONFIG,
    [EnvironmentType.Dev]: SERVER_DEV_NOTIFIER_CONFIG,
    [EnvironmentType.Test]: SERVER_TEST_NOTIFIER_CONFIG,
    [EnvironmentType.Staging]: SERVER_STAGING_NOTIFIER_CONFIG,
    [EnvironmentType.Production]: SERVER_PRODUCTION_NOTIFIER_CONFIG
};
