import { Nullable } from "@wraithlight/core.types";
import { ContentClient } from "@wraithlight/core.environment-static.types";
import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constant";

import { ClientConfigurationReader } from "../../config-reader";

export class ClientContentConfigReader extends ClientConfigurationReader<ContentClient> {

    private static _instance: Nullable<ClientConfigurationReader<ContentClient>>;

    public static getInstance(environment: EnvironmentType): ClientContentConfigReader {
        if (!this._instance) {
            this._instance = new ClientConfigurationReader<ContentClient>(ApplicationName.Content, environment);
        }
        return this._instance;
    }

}
