import { EditorServer, EnvironmentStatic } from "@wraithlight/core.environment-static.types";
import { EnvironmentType } from "@wraithlight/core.common-constants";

import { SERVER_LOCAL_EDITOR_CONFIG } from "./local";
import { SERVER_DEV_EDITOR_CONFIG } from "./dev";
import { SERVER_TEST_EDITOR_CONFIG } from "./test";
import { SERVER_STAGING_EDITOR_CONFIG } from "./staging";
import { SERVER_PRODUCTION_EDITOR_CONFIG } from "./production";

export const SERVER_EDITOR_CONFIG: Readonly<EnvironmentStatic<EditorServer>> = {
    [EnvironmentType.Local]: SERVER_LOCAL_EDITOR_CONFIG,
    [EnvironmentType.Dev]: SERVER_DEV_EDITOR_CONFIG,
    [EnvironmentType.Test]: SERVER_TEST_EDITOR_CONFIG,
    [EnvironmentType.Staging]: SERVER_STAGING_EDITOR_CONFIG,
    [EnvironmentType.Production]: SERVER_PRODUCTION_EDITOR_CONFIG
};
