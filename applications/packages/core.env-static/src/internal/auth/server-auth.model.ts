import { ApiModel } from "../_shared/common-api.model";
import { ServerDatabaseModel } from "../_shared/server-database.model";

export interface ServerAuthModel {
    database: ServerDatabaseModel;
    address: ApiModel;
}
