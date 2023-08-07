import { EnvironmentType } from "@wraithlight/core.common-constant";

export interface EnvironmentStatic<T> {
    [EnvironmentType.Local]: T,
    [EnvironmentType.Dev]: T,
    [EnvironmentType.Test]: T,
    [EnvironmentType.Staging]: T,
    [EnvironmentType.Production]: T
}
