import { UserManagementServer } from "@wraithlight/core.environment-static.types";

export const SERVER_LOCAL_USER_MANAGEMENT_CONFIG: Readonly<
  UserManagementServer> = {
  database: {
    host: "localhost",
    port: 9000,
    username: "wraithlight-um-user-1",
    password: "wraithlight-um-user-1-pw",
    database: "WL_UM",
  },
  session: {
    iv: "",
    secret: "",
    key: ""
  },
  apiTokens: [
    "bb3a7a80-44ec-4b74-9b7b-c8cd58f777b3"
  ],
  /**
  * @deprecated Use `apiTokens` from `getCommon` instead.
  */
  apiTokensNamed: {
    healtcheck: [
      "bb3a7a80-44ec-4b74-9b7b-c8cd58f777b3"
    ],
    metrics: [
      "bb3a7a80-44ec-4b74-9b7b-c8cd58f777b3"
    ]
  }
};
