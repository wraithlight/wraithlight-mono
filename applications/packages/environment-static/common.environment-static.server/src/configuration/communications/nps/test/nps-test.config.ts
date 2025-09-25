import { CommsNPSServer } from "@wraithlight/core.environment-static.types";

export const SERVER_TEST_COMMS_NPS_CONFIG: Readonly<CommsNPSServer> = {
  database: {
    host: "",
    port: 0,
    username: "",
    password: "",
    database: ""
  },
  apiTokens: {
    smsSender: "",
    pushSender: "",
    emailSender: "",
  }
};
