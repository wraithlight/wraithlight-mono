import { Nullable } from "@wraithlight/core.types";
import { UserManagementServer } from "@wraithlight/core.environment-static.types";
import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constants";

import { ServerConfigurationReader } from "../../config-reader";

export class ServerUserManagementConfigReader extends ServerConfigurationReader<UserManagementServer> {

    private static _instance: Nullable<ServerConfigurationReader<UserManagementServer>>;

    public static getInstance(environment: EnvironmentType): ServerUserManagementConfigReader {
        if (!this._instance) {
            this._instance = new ServerConfigurationReader<UserManagementServer>(ApplicationName.UserManagement, environment);
        }
        return this._instance;
    }

}
