import { ServerAuthModel } from "./auth/server-auth.model";
import { ServerLogsModel } from "./auth/server-logs.model";

export interface ServerModel {
    auth: ServerAuthModel;
    logs: ServerLogsModel;
}
