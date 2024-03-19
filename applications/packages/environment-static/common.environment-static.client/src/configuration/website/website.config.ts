import { EnvironmentType } from "@wraithlight/core.env.types";
import { EnvironmentStatic, WebsiteClient } from "@wraithlight/core.environment-static.types";

import { CLIENT_DEV_WEBSITE_CONFIG } from "./dev";
import { CLIENT_LOCAL_WEBSITE_CONFIG } from "./local";
import { CLIENT_PRODUCTION_WEBSITE_CONFIG } from "./production";
import { CLIENT_STAGING_WEBSITE_CONFIG } from "./staging";
import { CLIENT_TEST_WEBSITE_CONFIG } from "./test";

export const CLIENT_WEBSITE_CONFIG: Readonly<EnvironmentStatic<WebsiteClient>> = {
    [EnvironmentType.Local]: CLIENT_LOCAL_WEBSITE_CONFIG,
    [EnvironmentType.Dev]: CLIENT_DEV_WEBSITE_CONFIG,
    [EnvironmentType.Test]: CLIENT_TEST_WEBSITE_CONFIG,
    [EnvironmentType.Staging]: CLIENT_STAGING_WEBSITE_CONFIG,
    [EnvironmentType.Production]: CLIENT_PRODUCTION_WEBSITE_CONFIG
};
