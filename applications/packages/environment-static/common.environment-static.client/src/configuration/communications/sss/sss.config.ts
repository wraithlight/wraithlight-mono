import { EnvironmentType } from "@wraithlight/core.env.types";
import { CommsSSSClient, EnvironmentStatic } from "@wraithlight/core.environment-static.types";

import { CLIENT_DEV_COMMS_SSS_CONFIG } from "./dev";
import { CLIENT_LOCAL_COMMS_SSS_CONFIG } from "./local";
import { CLIENT_PRODUCTION_COMMS_SSS_CONFIG } from "./production";
import { CLIENT_STAGING_COMMS_SSS_CONFIG } from "./staging";
import { CLIENT_TEST_COMMS_SSS_CONFIG } from "./test";

export const CLIENT_COMMS_SSS_CONFIG: Readonly<
    EnvironmentStatic<CommsSSSClient>
    > = {
    [EnvironmentType.Local]: CLIENT_LOCAL_COMMS_SSS_CONFIG,
    [EnvironmentType.Dev]: CLIENT_DEV_COMMS_SSS_CONFIG,
    [EnvironmentType.Test]: CLIENT_TEST_COMMS_SSS_CONFIG,
    [EnvironmentType.Staging]: CLIENT_STAGING_COMMS_SSS_CONFIG,
    [EnvironmentType.Production]: CLIENT_PRODUCTION_COMMS_SSS_CONFIG
};
