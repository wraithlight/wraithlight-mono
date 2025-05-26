import { EnvironmentType } from "@wraithlight/core.env.types";
import { CommsESSShared, EnvironmentStatic } from "@wraithlight/core.environment-static.types";

import { SHARED_DEV_COMMS_ESS_CONFIG } from "./dev";
import { SHARED_LOCAL_COMMS_ESS_CONFIG } from "./local";
import { SHARED_PRODUCTION_COMMS_ESS_CONFIG } from "./production";
import { SHARED_STAGING_COMMS_ESS_CONFIG } from "./staging";
import { SHARED_TEST_COMMS_ESS_CONFIG } from "./test";

export const SHARED_COMMS_ESS_CONFIG: Readonly<
    EnvironmentStatic<CommsESSShared>
    > = {
    [EnvironmentType.Local]: SHARED_LOCAL_COMMS_ESS_CONFIG,
    [EnvironmentType.Dev]: SHARED_DEV_COMMS_ESS_CONFIG,
    [EnvironmentType.Test]: SHARED_TEST_COMMS_ESS_CONFIG,
    [EnvironmentType.Staging]: SHARED_STAGING_COMMS_ESS_CONFIG,
    [EnvironmentType.Production]: SHARED_PRODUCTION_COMMS_ESS_CONFIG
};
