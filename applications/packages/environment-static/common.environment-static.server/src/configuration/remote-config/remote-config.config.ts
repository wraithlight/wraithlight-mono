import { EnvironmentType } from "@wraithlight/core.env.types";
import { EnvironmentStatic, RemoteConfigServer } from "@wraithlight/core.environment-static.types";

import { SERVER_DEV_REMOTE_CONFIG_CONFIG } from "./dev";
import { SERVER_LOCAL_REMOTE_CONFIG_CONFIG } from "./local";
import { SERVER_PRODUCTION_REMOTE_CONFIG_CONFIG } from "./production";
import { SERVER_STAGING_REMOTE_CONFIG_CONFIG } from "./staging";
import { SERVER_TEST_REMOTE_CONFIG_CONFIG } from "./test";

export const SERVER_REMOTE_CONFIG_CONFIG: Readonly<
    EnvironmentStatic<RemoteConfigServer>
    > = {
    [EnvironmentType.Local]: SERVER_LOCAL_REMOTE_CONFIG_CONFIG,
    [EnvironmentType.Dev]: SERVER_DEV_REMOTE_CONFIG_CONFIG,
    [EnvironmentType.Test]: SERVER_TEST_REMOTE_CONFIG_CONFIG,
    [EnvironmentType.Staging]: SERVER_STAGING_REMOTE_CONFIG_CONFIG,
    [EnvironmentType.Production]: SERVER_PRODUCTION_REMOTE_CONFIG_CONFIG
};
