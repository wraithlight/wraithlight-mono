import { ContentClient, EnvironmentStatic } from "@wraithlight/core.environment-static.types";
import { EnvironmentType } from "@wraithlight/core.common-constant";

import { CLIENT_LOCAL_CONTENT_CONFIG } from "./local";
import { CLIENT_DEV_CONTENT_CONFIG } from "./dev";
import { CLIENT_TEST_CONTENT_CONFIG } from "./test";

export const CLIENT_CONTENT_CONFIG: Readonly<EnvironmentStatic<ContentClient>> = {
    [EnvironmentType.Local]: CLIENT_LOCAL_CONTENT_CONFIG,
    [EnvironmentType.Dev]: CLIENT_DEV_CONTENT_CONFIG,
    [EnvironmentType.Test]: CLIENT_TEST_CONTENT_CONFIG
};
