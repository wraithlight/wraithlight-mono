import { EnvironmentType } from "@wraithlight/core.env.types";
import { CommsNPSServer, EnvironmentStatic } from "@wraithlight/core.environment-static.types";

import { SERVER_DEV_COMMS_PSS_CONFIG } from "./dev";
import { SERVER_LOCAL_COMMS_PSS_CONFIG } from "./local";
import { SERVER_PRODUCTION_COMMS_PSS_CONFIG } from "./production";
import { SERVER_STAGING_COMMS_PSS_CONFIG } from "./staging";
import { SERVER_TEST_COMMS_PSS_CONFIG } from "./test";

export const SERVER_COMMS_PSS_CONFIG: Readonly<
    EnvironmentStatic<CommsNPSServer>
    > = {
    [EnvironmentType.Local]: SERVER_LOCAL_COMMS_PSS_CONFIG,
    [EnvironmentType.Dev]: SERVER_DEV_COMMS_PSS_CONFIG,
    [EnvironmentType.Test]: SERVER_TEST_COMMS_PSS_CONFIG,
    [EnvironmentType.Staging]: SERVER_STAGING_COMMS_PSS_CONFIG,
    [EnvironmentType.Production]: SERVER_PRODUCTION_COMMS_PSS_CONFIG
};
