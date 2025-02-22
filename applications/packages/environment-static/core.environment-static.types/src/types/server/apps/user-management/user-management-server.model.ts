import { DatabaseServer } from "../_internal";

import { UserManagementServerSession } from "./session.model";

export interface UserManagementServer {
    database: DatabaseServer;
    session: UserManagementServerSession;
    /**
     * @deprecated Use named tokens instead.
     */
    apiTokens: ReadonlyArray<string>;
    apiTokensNamed: {
      healtcheck: ReadonlyArray<string>;
      metrics: ReadonlyArray<string>;
    }
}
