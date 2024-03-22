import { EnvironmentType } from "@wraithlight/core.env.types";
import { EditorClient, EnvironmentStatic } from "@wraithlight/core.environment-static.types";

import { CLIENT_DEV_EDITOR_CONFIG } from "./dev";
import { CLIENT_LOCAL_EDITOR_CONFIG } from "./local";
import { CLIENT_PRODUCTION_EDITOR_CONFIG } from "./production";
import { CLIENT_STAGING_EDITOR_CONFIG } from "./staging";
import { CLIENT_TEST_EDITOR_CONFIG } from "./test";

export const CLIENT_EDITOR_CONFIG: Readonly<
    EnvironmentStatic<EditorClient>
    > = {
    [EnvironmentType.Local]: CLIENT_LOCAL_EDITOR_CONFIG,
    [EnvironmentType.Dev]: CLIENT_DEV_EDITOR_CONFIG,
    [EnvironmentType.Test]: CLIENT_TEST_EDITOR_CONFIG,
    [EnvironmentType.Staging]: CLIENT_STAGING_EDITOR_CONFIG,
    [EnvironmentType.Production]: CLIENT_PRODUCTION_EDITOR_CONFIG
};
