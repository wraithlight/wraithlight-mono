import { EditorServer, EnvironmentStatic } from "@wraithlight/core.environment-static.types";
import { EnvironmentType } from "@wraithlight/core.common-constant";

import { SERVER_LOCAL_EDITOR_CONFIG } from "./local";
import { SERVER_DEV_EDITOR_CONFIG } from "./dev";
import { SERVER_TEST_EDITOR_CONFIG } from "./test";

export const SERVER_EDITOR_CONFIG: Readonly<EnvironmentStatic<EditorServer>> = {
    [EnvironmentType.Local]: SERVER_LOCAL_EDITOR_CONFIG,
    [EnvironmentType.Dev]: SERVER_DEV_EDITOR_CONFIG,
    [EnvironmentType.Test]: SERVER_TEST_EDITOR_CONFIG
};
