import { CoreEnvironment } from "@wraithlight/core.env.sdk";

export namespace EnvironmentStaticEnv {
    export const userManagementDatabaseUsername = (): string => CoreEnvironment
    .getString(
        "userManagementDbUsername",
        ""
    );
    export const userManagementDatabasePassword = (): string => CoreEnvironment
    .getString(
        "userManagementDbPassword",
        ""
    );
    export const userManagementDatabaseName = (): string => CoreEnvironment
    .getString(
        "userManagementDbName",
        ""
    );
    export const userManagementDatabasePort = (): number => CoreEnvironment
    .getNumber(
        "userManagementDbPort",
        0
    );
}
