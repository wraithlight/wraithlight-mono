import { EnvironmentType } from "@wraithlight/core.common-constant";
import { Predicate, Primitive } from "@wraithlight/core.types";

import { WL_TYPE_PROP_NAME } from "./env.const";
import { IEnvironment } from "./env.model";

export function getEnvironmentType(): EnvironmentType {
    return process.env[WL_TYPE_PROP_NAME] as EnvironmentType || EnvironmentType.Local;
}

export function getFromEnvironment<T extends Primitive>(predicate: Predicate<IEnvironment, T>): T {
    return predicate((process.env as unknown as IEnvironment)) as T;
}
