import { ApplicationName } from "@wraithlight/core.common-constants";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { ContentClient } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/core.nullable";

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
