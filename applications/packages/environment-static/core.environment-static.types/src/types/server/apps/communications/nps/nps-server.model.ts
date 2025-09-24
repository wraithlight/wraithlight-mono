import { DatabaseServer } from "../../_internal";

export interface CommsNPSServer {
  database: DatabaseServer;
  apiTokens: {
    emailSender: string,
    pushSender: string,
    smsSender: string
  }
}
