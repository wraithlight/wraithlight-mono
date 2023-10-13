import { ContentServer, EnvironmentStatic } from "@wraithlight/core.environment-static.types";
import { EnvironmentType } from "@wraithlight/core.common-constants";

import { SERVER_LOCAL_CONTENT_CONFIG } from "./local";
import { SERVER_DEV_CONTENT_CONFIG } from "./dev";
import { SERVER_TEST_CONTENT_CONFIG } from "./test";
import { SERVER_STAGING_CONTENT_CONFIG } from "./staging";
import { SERVER_PRODUCTION_CONTENT_CONFIG } from "./production";

export const SERVER_CONTENT_CONFIG: Readonly<EnvironmentStatic<ContentServer>> = {
    [EnvironmentType.Local]: SERVER_LOCAL_CONTENT_CONFIG,
    [EnvironmentType.Dev]: SERVER_DEV_CONTENT_CONFIG,
    [EnvironmentType.Test]: SERVER_TEST_CONTENT_CONFIG,
    [EnvironmentType.Staging]: SERVER_STAGING_CONTENT_CONFIG,
    [EnvironmentType.Production]: SERVER_PRODUCTION_CONTENT_CONFIG
};
