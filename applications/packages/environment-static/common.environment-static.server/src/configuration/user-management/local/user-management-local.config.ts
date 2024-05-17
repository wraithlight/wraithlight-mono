import { UserManagementServer } from "@wraithlight/core.environment-static.types";

export const SERVER_LOCAL_USER_MANAGEMENT_CONFIG: Readonly<
    UserManagementServer> = {
    database: {
        host: "localhost",
        port: 9000,
        username: "wraithlight-auth-user-1",
        password: "wraithlight-auth-user-1-pw",
        database: "WL_AUTH",
    },
    session: {
        iv: "",
        secret: "",
        key: ""
    }
};
