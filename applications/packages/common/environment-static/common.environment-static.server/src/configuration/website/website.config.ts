import { WebsiteServer, EnvironmentStatic } from "@wraithlight/core.environment-static.types";
import { EnvironmentType } from "@wraithlight/core.common-constant";

import { SERVER_LOCAL_WEBSITE_CONFIG } from "./local";
import { SERVER_DEV_WEBSITE_CONFIG } from "./dev";
import { SERVER_TEST_WEBSITE_CONFIG } from "./test";
import { SERVER_STAGING_WEBSITE_CONFIG } from "./staging";
import { SERVER_PRODUCTION_WEBSITE_CONFIG } from "./production";

export const SERVER_WEBSITE_CONFIG: Readonly<EnvironmentStatic<WebsiteServer>> = {
    [EnvironmentType.Local]: SERVER_LOCAL_WEBSITE_CONFIG,
    [EnvironmentType.Dev]: SERVER_DEV_WEBSITE_CONFIG,
    [EnvironmentType.Test]: SERVER_TEST_WEBSITE_CONFIG,
    [EnvironmentType.Staging]: SERVER_STAGING_WEBSITE_CONFIG,
    [EnvironmentType.Production]: SERVER_PRODUCTION_WEBSITE_CONFIG
};
