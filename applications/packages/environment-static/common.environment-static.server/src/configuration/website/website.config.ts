import { EnvironmentType } from "@wraithlight/core.common-constants";
import { EnvironmentStatic, WebsiteServer } from "@wraithlight/core.environment-static.types";

import { SERVER_DEV_WEBSITE_CONFIG } from "./dev";
import { SERVER_LOCAL_WEBSITE_CONFIG } from "./local";
import { SERVER_PRODUCTION_WEBSITE_CONFIG } from "./production";
import { SERVER_STAGING_WEBSITE_CONFIG } from "./staging";
import { SERVER_TEST_WEBSITE_CONFIG } from "./test";

export const SERVER_WEBSITE_CONFIG: Readonly<EnvironmentStatic<WebsiteServer>> = {
    [EnvironmentType.Local]: SERVER_LOCAL_WEBSITE_CONFIG,
    [EnvironmentType.Dev]: SERVER_DEV_WEBSITE_CONFIG,
    [EnvironmentType.Test]: SERVER_TEST_WEBSITE_CONFIG,
    [EnvironmentType.Staging]: SERVER_STAGING_WEBSITE_CONFIG,
    [EnvironmentType.Production]: SERVER_PRODUCTION_WEBSITE_CONFIG
};
