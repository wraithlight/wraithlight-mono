import { Nullable } from "@wraithlight/core/core.types";
import { UserManagementClient } from "@wraithlight/core.environment-static.types";
import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constant";

import { ClientConfigurationReader } from "../../config-reader";

export class ClientUserManagementConfigReader extends ClientConfigurationReader<UserManagementClient> {

    private static _instance: Nullable<ClientConfigurationReader<UserManagementClient>>;

    public static getInstance(environment: EnvironmentType): ClientUserManagementConfigReader {
        if (!this._instance) {
            this._instance = new ClientConfigurationReader<UserManagementClient>(ApplicationName.UserManagement, environment);
        }
        return this._instance;
    }

}
