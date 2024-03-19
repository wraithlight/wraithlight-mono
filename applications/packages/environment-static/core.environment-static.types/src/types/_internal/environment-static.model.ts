import { EnvironmentType } from "@wraithlight/core.env.types";

export interface EnvironmentStatic<T> {
    [EnvironmentType.Local]: T,
    [EnvironmentType.Dev]: T,
    [EnvironmentType.Test]: T,
    [EnvironmentType.Staging]: T,
    [EnvironmentType.Production]: T
}
