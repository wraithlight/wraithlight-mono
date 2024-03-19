import { ApplicationName } from "@wraithlight/core.common-constants";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { RemoteConfigServer } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/core.nullable";

import { ServerConfigurationReader } from "../../config-reader";

export class ServerRemoteConfigConfigReader extends ServerConfigurationReader<RemoteConfigServer> {

    private static _instance: Nullable<ServerConfigurationReader<RemoteConfigServer>>;

    public static getInstance(environment: EnvironmentType): ServerRemoteConfigConfigReader {
        if (!this._instance) {
            this._instance = new ServerConfigurationReader<RemoteConfigServer>(ApplicationName.RemoteConfig, environment);
        }
        return this._instance;
    }

}
