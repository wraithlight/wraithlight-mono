import { EnvironmentStaticEnv } from "@wraithlight/core.environment-static.env";
import { UserManagementServer } from "@wraithlight/core.environment-static.types";

export const SERVER_DEV_USER_MANAGEMENT_CONFIG: Readonly<
    UserManagementServer> = {
    database: {
        host: "",
        port: EnvironmentStaticEnv.userManagementDatabasePort(),
        username: EnvironmentStaticEnv.userManagementDatabaseUsername(),
        password: EnvironmentStaticEnv.userManagementDatabasePassword(),
        database: EnvironmentStaticEnv.userManagementDatabaseName(),
    },
    session: {
        iv: "",
        secret: "",
        key: ""
    }
};
