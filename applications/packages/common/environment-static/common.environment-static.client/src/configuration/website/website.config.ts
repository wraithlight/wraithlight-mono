import { WebsiteClient, EnvironmentStatic } from "@wraithlight/core.environment-static.types";
import { EnvironmentType } from "@wraithlight/core.common-constants";

import { CLIENT_LOCAL_WEBSITE_CONFIG } from "./local";
import { CLIENT_DEV_WEBSITE_CONFIG } from "./dev";
import { CLIENT_TEST_WEBSITE_CONFIG } from "./test";
import { CLIENT_STAGING_WEBSITE_CONFIG } from "./staging";
import { CLIENT_PRODUCTION_WEBSITE_CONFIG } from "./production";

export const CLIENT_WEBSITE_CONFIG: Readonly<EnvironmentStatic<WebsiteClient>> = {
    [EnvironmentType.Local]: CLIENT_LOCAL_WEBSITE_CONFIG,
    [EnvironmentType.Dev]: CLIENT_DEV_WEBSITE_CONFIG,
    [EnvironmentType.Test]: CLIENT_TEST_WEBSITE_CONFIG,
    [EnvironmentType.Staging]: CLIENT_STAGING_WEBSITE_CONFIG,
    [EnvironmentType.Production]: CLIENT_PRODUCTION_WEBSITE_CONFIG
};
