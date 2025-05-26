import { EnvironmentType } from "@wraithlight/core.env.types";
import { CommsPSSShared, EnvironmentStatic } from "@wraithlight/core.environment-static.types";

import { SHARED_DEV_COMMS_PSS_CONFIG } from "./dev";
import { SHARED_LOCAL_COMMS_PSS_CONFIG } from "./local";
import { SHARED_PRODUCTION_COMMS_PSS_CONFIG } from "./production";
import { SHARED_STAGING_COMMS_PSS_CONFIG } from "./staging";
import { SHARED_TEST_COMMS_PSS_CONFIG } from "./test";

export const SHARED_COMMS_PSS_CONFIG: Readonly<
    EnvironmentStatic<CommsPSSShared>
    > = {
    [EnvironmentType.Local]: SHARED_LOCAL_COMMS_PSS_CONFIG,
    [EnvironmentType.Dev]: SHARED_DEV_COMMS_PSS_CONFIG,
    [EnvironmentType.Test]: SHARED_TEST_COMMS_PSS_CONFIG,
    [EnvironmentType.Staging]: SHARED_STAGING_COMMS_PSS_CONFIG,
    [EnvironmentType.Production]: SHARED_PRODUCTION_COMMS_PSS_CONFIG
};
