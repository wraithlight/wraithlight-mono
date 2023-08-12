import { Nullable } from "@wraithlight/core.types";
import { GameWebsiteClient } from "@wraithlight/core.environment-static.types";
import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constant";

import { ClientConfigurationReader } from "../../config-reader";

export class ClientGameWebsiteConfigReader extends ClientConfigurationReader<GameWebsiteClient> {

    private static _instance: Nullable<ClientConfigurationReader<GameWebsiteClient>>;

    public static getInstance(environment: EnvironmentType): ClientGameWebsiteConfigReader {
        if (!this._instance) {
            this._instance = new ClientConfigurationReader<GameWebsiteClient>(ApplicationName.GameWebsite, environment);
        }
        return this._instance;
    }

}
