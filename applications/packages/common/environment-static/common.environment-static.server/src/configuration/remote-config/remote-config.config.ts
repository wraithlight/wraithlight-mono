import { RemoteConfigServer, EnvironmentStatic } from "@wraithlight/core.environment-static.types";
import { EnvironmentType } from "@wraithlight/core.common-constants";

import { SERVER_LOCAL_REMOTE_CONFIG_CONFIG } from "./local";
import { SERVER_DEV_REMOTE_CONFIG_CONFIG } from "./dev";
import { SERVER_TEST_REMOTE_CONFIG_CONFIG } from "./test";
import { SERVER_STAGING_REMOTE_CONFIG_CONFIG } from "./staging";
import { SERVER_PRODUCTION_REMOTE_CONFIG_CONFIG } from "./production";

export const SERVER_REMOTE_CONFIG_CONFIG: Readonly<EnvironmentStatic<RemoteConfigServer>> = {
    [EnvironmentType.Local]: SERVER_LOCAL_REMOTE_CONFIG_CONFIG,
    [EnvironmentType.Dev]: SERVER_DEV_REMOTE_CONFIG_CONFIG,
    [EnvironmentType.Test]: SERVER_TEST_REMOTE_CONFIG_CONFIG,
    [EnvironmentType.Staging]: SERVER_STAGING_REMOTE_CONFIG_CONFIG,
    [EnvironmentType.Production]: SERVER_PRODUCTION_REMOTE_CONFIG_CONFIG
};
