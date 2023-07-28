import { EnvironmentStatic, NotifierClient } from "@wraithlight/core.environment-static.types";
import { EnvironmentType } from "@wraithlight/core.common-constant";

import { CLIENT_LOCAL_NOTIFIER_CONFIG } from "./local";
import { CLIENT_DEV_NOTIFIER_CONFIG } from "./dev";
import { CLIENT_TEST_NOTIFIER_CONFIG } from "./test";

export const CLIENT_NOTIFIER_CONFIG: Readonly<EnvironmentStatic<NotifierClient>> = {
    [EnvironmentType.Local]: CLIENT_LOCAL_NOTIFIER_CONFIG,
    [EnvironmentType.Dev]: CLIENT_DEV_NOTIFIER_CONFIG,
    [EnvironmentType.Test]: CLIENT_TEST_NOTIFIER_CONFIG
};
