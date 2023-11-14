import { EnvironmentType } from "@wraithlight/core.common-constants";
import { Predicate } from "@wraithlight/core.linq";
import { Primitive } from "@wraithlight/core.primitive";

import { WL_ENV_DEFAULT, WL_ENV_TYPE_PROP_NAME } from "./env.const";
import { IEnvironment } from "./env.model";

export function getEnvironmentType(): EnvironmentType {
    return process.env[WL_ENV_TYPE_PROP_NAME] as EnvironmentType || WL_ENV_DEFAULT;
}

export function getFromEnvironment<T extends Primitive>(predicate: Predicate<IEnvironment, T>): T {
    return predicate((process.env as unknown as IEnvironment)) as T;
}
