import { DatabaseServer } from "../_internal";

import { UserManagementServerSession } from "./session.model";

export interface UserManagementServer {
    database: DatabaseServer;
    session: UserManagementServerSession;
}
