import { EnvironmentType } from "@wraithlight/core.common-constant";

import { WL_TYPE_PROP_NAME } from "./env.const";

export function getEnvironmentType(): EnvironmentType {
    return process.env[WL_TYPE_PROP_NAME] as EnvironmentType || EnvironmentType.Local;
}
