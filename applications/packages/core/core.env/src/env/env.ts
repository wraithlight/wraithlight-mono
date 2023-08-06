import { EnvironmentType } from "@wraithlight/core.common-constant";

export function getEnvironment(): EnvironmentType {
    return process.env.wlType as EnvironmentType || EnvironmentType.Local;
}
