import { WL_ENV_TYPE_PROP_NAME } from "./env.const";

export interface IEnvironment {
    [WL_ENV_TYPE_PROP_NAME]?: string;
}

export type IEnvironmentPropery = keyof IEnvironment;
