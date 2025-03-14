import { UserManagementServer } from "@wraithlight/core.environment-static.types";

export const SERVER_PRODUCTION_USER_MANAGEMENT_CONFIG: Readonly<
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
    },
    apiTokens: [],
    apiTokensNamed: {
      healtcheck: [],
      metrics: []
    }
};
