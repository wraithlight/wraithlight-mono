import { Nullable } from "@wraithlight/core.nullable";
import { ContentServer } from "@wraithlight/core.environment-static.types";
import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constants";

import { ServerConfigurationReader } from "../../config-reader";

export class ServerContentConfigReader extends ServerConfigurationReader<ContentServer> {

    private static _instance: Nullable<ServerConfigurationReader<ContentServer>>;

    public static getInstance(environment: EnvironmentType): ServerContentConfigReader {
        if (!this._instance) {
            this._instance = new ServerConfigurationReader<ContentServer>(ApplicationName.Content, environment);
        }
        return this._instance;
    }

}
