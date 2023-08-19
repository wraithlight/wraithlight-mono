import { EnvironmentType } from "@wraithlight/core.common-constant";

import { WL_TYPE_PROP_NAME } from "./env.const";

/**
 * @deprecated Use `getEnvironmentType()` instead.
 */
export function getEnvironment(): EnvironmentType {
    return process.env[WL_TYPE_PROP_NAME] as EnvironmentType || EnvironmentType.Local;
}

export function getEnvironmentType(): EnvironmentType {
    return process.env[WL_TYPE_PROP_NAME] as EnvironmentType || EnvironmentType.Local;
}
