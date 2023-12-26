import { Nullable } from "@wraithlight/core.nullable";
import { WebsiteClient } from "@wraithlight/core.environment-static.types";
import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constants";

import { ClientConfigurationReader } from "../../config-reader";

export class ClientWebsiteConfigReader extends ClientConfigurationReader<WebsiteClient> {

    private static _instance: Nullable<ClientConfigurationReader<WebsiteClient>>;

    public static getInstance(environment: EnvironmentType): ClientWebsiteConfigReader {
        if (!this._instance) {
            this._instance = new ClientConfigurationReader<WebsiteClient>(ApplicationName.Website, environment);
        }
        return this._instance;
    }

}
