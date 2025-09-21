import { CommsSSSServer } from "@wraithlight/core.environment-static.types";

export const SERVER_PRODUCTION_COMMS_SSS_CONFIG: Readonly<CommsSSSServer> = {
  database: {
    host: "",
    port: 0,
    username: "",
    password: "",
    database: ""
  },
  apiTokens: {
    npsTokens: []
  }
};
