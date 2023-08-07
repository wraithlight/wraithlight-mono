import { ContentShared, EnvironmentStatic } from "@wraithlight/core.environment-static.types";
import { EnvironmentType } from "@wraithlight/core.common-constant";

import { SHARED_LOCAL_CONTENT_CONFIG } from "./local";
import { SHARED_DEV_CONTENT_CONFIG } from "./dev";
import { SHARED_TEST_CONTENT_CONFIG } from "./test";
import { SHARED_STAGING_CONTENT_CONFIG } from "./staging";
import { SHARED_PRODUCTION_CONTENT_CONFIG } from "./production";

export const SHARED_CONTENT_CONFIG: Readonly<EnvironmentStatic<ContentShared>> = {
    [EnvironmentType.Local]: SHARED_LOCAL_CONTENT_CONFIG,
    [EnvironmentType.Dev]: SHARED_DEV_CONTENT_CONFIG,
    [EnvironmentType.Test]: SHARED_TEST_CONTENT_CONFIG,
    [EnvironmentType.Staging]: SHARED_STAGING_CONTENT_CONFIG,
    [EnvironmentType.Production]: SHARED_PRODUCTION_CONTENT_CONFIG
};
