import { RemoteConfigClient, EnvironmentStatic } from "@wraithlight/core.environment-static.types";
import { EnvironmentType } from "@wraithlight/core.common-constant";

import { CLIENT_LOCAL_REMOTE_CONFIG_CONFIG } from "./local";
import { CLIENT_DEV_REMOTE_CONFIG_CONFIG } from "./dev";
import { CLIENT_TEST_REMOTE_CONFIG_CONFIG } from "./test";
import { CLIENT_STAGING_REMOTE_CONFIG_CONFIG } from "./staging";
import { CLIENT_PRODUCTION_REMOTE_CONFIG_CONFIG } from "./production";

export const CLIENT_REMOTE_CONFIG_CONFIG: Readonly<EnvironmentStatic<RemoteConfigClient>> = {
    [EnvironmentType.Local]: CLIENT_LOCAL_REMOTE_CONFIG_CONFIG,
    [EnvironmentType.Dev]: CLIENT_DEV_REMOTE_CONFIG_CONFIG,
    [EnvironmentType.Test]: CLIENT_TEST_REMOTE_CONFIG_CONFIG,
    [EnvironmentType.Staging]: CLIENT_STAGING_REMOTE_CONFIG_CONFIG,
    [EnvironmentType.Production]: CLIENT_PRODUCTION_REMOTE_CONFIG_CONFIG
};
