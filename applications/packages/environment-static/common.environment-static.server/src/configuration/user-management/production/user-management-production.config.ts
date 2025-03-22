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
  /**
  * @deprecated Use `apiTokens` from `getCommon` instead.
  */
  apiTokensNamed: {
    healtcheck: [],
    metrics: []
  }
};
