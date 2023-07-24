import { Nullable } from "@wraithlight/core/core.types";
import { UserManagementServer } from "@wraithlight/core.environment-static.types";
import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constant";

import { ServerConfigurationReader } from "../../config-reader";

export class ClientUserManagementConfigReader extends ServerConfigurationReader<UserManagementServer> {

    private static _instance: Nullable<ServerConfigurationReader<UserManagementServer>>;

    public static getInstance(environment: EnvironmentType): ClientUserManagementConfigReader {
        if (!this._instance) {
            this._instance = new ServerConfigurationReader<UserManagementServer>(ApplicationName.UserManagement, environment);
        }
        return this._instance;
    }

}
