import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constants";
import { UserManagementShared } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/core.nullable";

import { SharedConfigurationReader } from "../../config-reader";

export class SharedUserManagementConfigReader extends SharedConfigurationReader<UserManagementShared> {

    private static _instance: Nullable<SharedConfigurationReader<UserManagementShared>>;

    public static getInstance(environment: EnvironmentType): SharedUserManagementConfigReader {
        if (!this._instance) {
            this._instance = new SharedConfigurationReader<UserManagementShared>(ApplicationName.UserManagement, environment);
        }
        return this._instance;
    }

}
