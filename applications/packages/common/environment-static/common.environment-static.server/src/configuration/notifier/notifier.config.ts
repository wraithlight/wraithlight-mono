import { NotifierServer, EnvironmentStatic } from "@wraithlight/core.environment-static.types";
import { EnvironmentType } from "@wraithlight/core.common-constant";

import { SERVER_LOCAL_NOTIFIER_CONFIG } from "./local";
import { SERVER_DEV_NOTIFIER_CONFIG } from "./dev";
import { SERVER_TEST_NOTIFIER_CONFIG } from "./test";
import { SERVER_STAGING_NOTIFIER_CONFIG } from "./staging";
import { SERVER_PRODUCTION_NOTIFIER_CONFIG } from "./production";

export const SERVER_NOTIFIER_CONFIG: Readonly<EnvironmentStatic<NotifierServer>> = {
    [EnvironmentType.Local]: SERVER_LOCAL_NOTIFIER_CONFIG,
    [EnvironmentType.Dev]: SERVER_DEV_NOTIFIER_CONFIG,
    [EnvironmentType.Test]: SERVER_TEST_NOTIFIER_CONFIG,
    [EnvironmentType.Staging]: SERVER_STAGING_NOTIFIER_CONFIG,
    [EnvironmentType.Production]: SERVER_PRODUCTION_NOTIFIER_CONFIG
};
