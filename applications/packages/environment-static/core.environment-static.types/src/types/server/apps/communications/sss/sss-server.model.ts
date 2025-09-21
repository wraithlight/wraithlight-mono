import { DatabaseServer } from "../../_internal";

export interface CommsSSSServer {
  database: DatabaseServer;
  apiTokens: {
    npsTokens: ReadonlyArray<string>
  }
}
