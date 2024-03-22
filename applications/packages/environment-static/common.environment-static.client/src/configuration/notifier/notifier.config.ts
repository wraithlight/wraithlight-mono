import { EnvironmentType } from "@wraithlight/core.env.types";
import { EnvironmentStatic, NotifierClient } from "@wraithlight/core.environment-static.types";

import { CLIENT_DEV_NOTIFIER_CONFIG } from "./dev";
import { CLIENT_LOCAL_NOTIFIER_CONFIG } from "./local";
import { CLIENT_PRODUCTION_NOTIFIER_CONFIG } from "./production";
import { CLIENT_STAGING_NOTIFIER_CONFIG } from "./staging";
import { CLIENT_TEST_NOTIFIER_CONFIG } from "./test";

export const CLIENT_NOTIFIER_CONFIG: Readonly<
    EnvironmentStatic<NotifierClient>
    > = {
    [EnvironmentType.Local]: CLIENT_LOCAL_NOTIFIER_CONFIG,
    [EnvironmentType.Dev]: CLIENT_DEV_NOTIFIER_CONFIG,
    [EnvironmentType.Test]: CLIENT_TEST_NOTIFIER_CONFIG,
    [EnvironmentType.Staging]: CLIENT_STAGING_NOTIFIER_CONFIG,
    [EnvironmentType.Production]: CLIENT_PRODUCTION_NOTIFIER_CONFIG
};
