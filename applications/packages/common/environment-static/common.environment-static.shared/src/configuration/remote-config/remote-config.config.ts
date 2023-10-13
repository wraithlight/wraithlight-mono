import { RemoteConfigShared, EnvironmentStatic } from "@wraithlight/core.environment-static.types";
import { EnvironmentType } from "@wraithlight/core.common-constants";

import { SHARED_LOCAL_REMOTE_CONFIG_CONFIG } from "./local";
import { SHARED_DEV_REMOTE_CONFIG_CONFIG } from "./dev";
import { SHARED_TEST_REMOTE_CONFIG_CONFIG } from "./test";
import { SHARED_STAGING_REMOTE_CONFIG_CONFIG } from "./staging";
import { SHARED_PRODUCTION_REMOTE_CONFIG_CONFIG } from "./production";

export const SHARED_REMOTE_CONFIG_CONFIG: Readonly<EnvironmentStatic<RemoteConfigShared>> = {
    [EnvironmentType.Local]: SHARED_LOCAL_REMOTE_CONFIG_CONFIG,
    [EnvironmentType.Dev]: SHARED_DEV_REMOTE_CONFIG_CONFIG,
    [EnvironmentType.Test]: SHARED_TEST_REMOTE_CONFIG_CONFIG,
    [EnvironmentType.Staging]: SHARED_STAGING_REMOTE_CONFIG_CONFIG,
    [EnvironmentType.Production]: SHARED_PRODUCTION_REMOTE_CONFIG_CONFIG
};
