import { Nullable } from "@wraithlight/core/core.types";
import { UserManagementShared } from "@wraithlight/core.environment-static.types";
import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constant";

import { SharedConfigurationReader } from "../../config-reader";

export class ClientUserManagementConfigReader extends SharedConfigurationReader<UserManagementShared> {

    private static _instance: Nullable<SharedConfigurationReader<UserManagementShared>>;

    public static getInstance(environment: EnvironmentType): ClientUserManagementConfigReader {
        if (!this._instance) {
            this._instance = new SharedConfigurationReader<UserManagementShared>(ApplicationName.UserManagement, environment);
        }
        return this._instance;
    }

}
