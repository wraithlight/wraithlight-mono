import { EnvironmentType } from "@wraithlight/core.env.types";
import { CommsESSServer, EnvironmentStatic } from "@wraithlight/core.environment-static.types";

import { SERVER_DEV_COMMS_ESS_CONFIG } from "./dev";
import { SERVER_LOCAL_COMMS_ESS_CONFIG } from "./local";
import { SERVER_PRODUCTION_COMMS_ESS_CONFIG } from "./production";
import { SERVER_STAGING_COMMS_ESS_CONFIG } from "./staging";
import { SERVER_TEST_COMMS_ESS_CONFIG } from "./test";

export const SERVER_COMMS_ESS_CONFIG: Readonly<
    EnvironmentStatic<CommsESSServer>
    > = {
    [EnvironmentType.Local]: SERVER_LOCAL_COMMS_ESS_CONFIG,
    [EnvironmentType.Dev]: SERVER_DEV_COMMS_ESS_CONFIG,
    [EnvironmentType.Test]: SERVER_TEST_COMMS_ESS_CONFIG,
    [EnvironmentType.Staging]: SERVER_STAGING_COMMS_ESS_CONFIG,
    [EnvironmentType.Production]: SERVER_PRODUCTION_COMMS_ESS_CONFIG
};
