import { WL_ENV_TYPE_PROP_NAME } from "./env.const";

interface IEnvironment {
    [WL_ENV_TYPE_PROP_NAME]?: string;
    userManagementDbUsername: string;
    userManagementDbPassword: string;
    userManagementDbName: string;
    userManagementDbPort: string;
}

export type IEnvironmentPropery = keyof IEnvironment;
