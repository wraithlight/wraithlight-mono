import { ServerAuthModel } from "./auth/server-auth.model";
import { ServerContentModel } from "./content/server-content.model";
import { ServerLogsModel } from "./logs/server-logs.model";

export interface ServerModel {
    auth: ServerAuthModel;
    logs: ServerLogsModel;
    content: ServerContentModel;
}
