import { ContentServer, EnvironmentStatic } from "@wraithlight/core.environment-static.types";
import { EnvironmentType } from "@wraithlight/core.common-constant";

import { SERVER_LOCAL_CONTENT_CONFIG } from "./local";
import { SERVER_DEV_CONTENT_CONFIG } from "./dev";
import { SERVER_TEST_CONTENT_CONFIG } from "./test";

export const SERVER_CONTENT_CONFIG: Readonly<EnvironmentStatic<ContentServer>> = {
    [EnvironmentType.Local]: SERVER_LOCAL_CONTENT_CONFIG,
    [EnvironmentType.Dev]: SERVER_DEV_CONTENT_CONFIG,
    [EnvironmentType.Test]: SERVER_TEST_CONTENT_CONFIG
};
