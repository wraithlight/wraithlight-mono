import { ApplicationName } from "@wraithlight/core.common-constants";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { WebsiteClient } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/core.nullable";

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
