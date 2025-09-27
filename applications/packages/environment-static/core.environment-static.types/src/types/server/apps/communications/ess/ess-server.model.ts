import { DatabaseServer } from "../../_internal";

export interface CommsESSServer {
  database: DatabaseServer;
  apiTokens: {
   notifierProxy: string
  }
}
