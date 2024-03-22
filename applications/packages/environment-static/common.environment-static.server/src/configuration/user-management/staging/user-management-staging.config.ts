import { UserManagementServer } from "@wraithlight/core.environment-static.types";

export const SERVER_STAGING_USER_MANAGEMENT_CONFIG: Readonly<
    UserManagementServer> = {
    database: {
        host: "",
        port: 0,
        username: "",
        password: "",
        database: "",
    },
    session: {
        iv: "",
        secret: "",
        key: ""
    }
};
