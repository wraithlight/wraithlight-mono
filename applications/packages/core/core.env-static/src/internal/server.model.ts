import { ServerAuthModel } from "./auth/server-auth.model";
import { ServerCommonModel } from "./common/server-common.model";
import { ServerContentModel } from "./content/server-content.model";
import { ServerLogsModel } from "./logs/server-logs.model";

export interface ServerModel {
    auth: ServerAuthModel;
    logs: ServerLogsModel;
    content: ServerContentModel;
    common: ServerCommonModel;
}
