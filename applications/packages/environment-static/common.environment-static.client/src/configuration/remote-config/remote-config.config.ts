import { EnvironmentType } from "@wraithlight/core.env.types";
import { EnvironmentStatic, RemoteConfigClient } from "@wraithlight/core.environment-static.types";

import { CLIENT_DEV_REMOTE_CONFIG_CONFIG } from "./dev";
import { CLIENT_LOCAL_REMOTE_CONFIG_CONFIG } from "./local";
import { CLIENT_PRODUCTION_REMOTE_CONFIG_CONFIG } from "./production";
import { CLIENT_STAGING_REMOTE_CONFIG_CONFIG } from "./staging";
import { CLIENT_TEST_REMOTE_CONFIG_CONFIG } from "./test";

export const CLIENT_REMOTE_CONFIG_CONFIG: Readonly<EnvironmentStatic<RemoteConfigClient>> = {
    [EnvironmentType.Local]: CLIENT_LOCAL_REMOTE_CONFIG_CONFIG,
    [EnvironmentType.Dev]: CLIENT_DEV_REMOTE_CONFIG_CONFIG,
    [EnvironmentType.Test]: CLIENT_TEST_REMOTE_CONFIG_CONFIG,
    [EnvironmentType.Staging]: CLIENT_STAGING_REMOTE_CONFIG_CONFIG,
    [EnvironmentType.Production]: CLIENT_PRODUCTION_REMOTE_CONFIG_CONFIG
};
