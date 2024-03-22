import { ApplicationName } from "@wraithlight/core.auth.constant";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { RemoteConfigClient } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/core.nullable";

import { ClientConfigurationReader } from "../../config-reader";

export class ClientRemoteConfigConfigReader
    extends ClientConfigurationReader<RemoteConfigClient> {

    private static _instance: Nullable<
        ClientConfigurationReader<RemoteConfigClient>>;

    public static getInstance(
        environment: EnvironmentType
    ):ClientRemoteConfigConfigReader {
        if (!this._instance) {
            this._instance = new ClientConfigurationReader<RemoteConfigClient>(
                 ApplicationName.RemoteConfig,
                environment
            );
        }
        return this._instance;
    }

}
