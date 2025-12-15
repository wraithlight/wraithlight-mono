import { EnvironmentType } from "@wraithlight/core.env.types";
import { EditorShared, EnvironmentStatic } from "@wraithlight/core.environment-static.types";

import { SHARED_DEV_EDITOR_CONFIG } from "./dev";
import { SHARED_LOCAL_EDITOR_CONFIG } from "./local";
import { SHARED_PRODUCTION_EDITOR_CONFIG } from "./production";
import { SHARED_STAGING_EDITOR_CONFIG } from "./staging";
import { SHARED_TEST_EDITOR_CONFIG } from "./test";

export const SHARED_EDITOR_CONFIG: Readonly<
  EnvironmentStatic<EditorShared>
> = {
  [EnvironmentType.Local]: SHARED_LOCAL_EDITOR_CONFIG,
  [EnvironmentType.Dev]: SHARED_DEV_EDITOR_CONFIG,
  [EnvironmentType.Test]: SHARED_TEST_EDITOR_CONFIG,
  [EnvironmentType.Staging]: SHARED_STAGING_EDITOR_CONFIG,
  [EnvironmentType.Production]: SHARED_PRODUCTION_EDITOR_CONFIG
};
