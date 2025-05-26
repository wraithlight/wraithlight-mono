import { EnvironmentType } from "@wraithlight/core.env.types";
import { CommsSSSShared, EnvironmentStatic } from "@wraithlight/core.environment-static.types";

import { SHARED_DEV_COMMS_SSS_CONFIG } from "./dev";
import { SHARED_LOCAL_COMMS_SSS_CONFIG } from "./local";
import { SHARED_PRODUCTION_COMMS_SSS_CONFIG } from "./production";
import { SHARED_STAGING_COMMS_SSS_CONFIG } from "./staging";
import { SHARED_TEST_COMMS_SSS_CONFIG } from "./test";

export const SHARED_COMMS_SSS_CONFIG: Readonly<
    EnvironmentStatic<CommsSSSShared>
    > = {
    [EnvironmentType.Local]: SHARED_LOCAL_COMMS_SSS_CONFIG,
    [EnvironmentType.Dev]: SHARED_DEV_COMMS_SSS_CONFIG,
    [EnvironmentType.Test]: SHARED_TEST_COMMS_SSS_CONFIG,
    [EnvironmentType.Staging]: SHARED_STAGING_COMMS_SSS_CONFIG,
    [EnvironmentType.Production]: SHARED_PRODUCTION_COMMS_SSS_CONFIG
};
