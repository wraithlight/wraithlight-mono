import { ApplicationName } from "@wraithlight/core.auth.constant";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { UserManagementClient } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/core.nullable";

import { ClientConfigurationReader } from "../../config-reader";

export class ClientUserManagementConfigReader
    extends ClientConfigurationReader<UserManagementClient> {

    private static _instance: Nullable<
        ClientConfigurationReader<UserManagementClient>>;

    public static getInstance(
        environment: EnvironmentType
    ):ClientUserManagementConfigReader {
        if (!this._instance) {
            this._instance = new ClientConfigurationReader<
                UserManagementClient
            >(
                 ApplicationName.UserManagement,
                environment
            );
        }
        return this._instance;
    }

}
