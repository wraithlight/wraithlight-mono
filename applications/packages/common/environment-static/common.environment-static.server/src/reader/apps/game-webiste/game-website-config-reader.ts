import { Nullable } from "@wraithlight/core/core.types";
import { GameWebsiteServer } from "@wraithlight/core.environment-static.types";
import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constant";

import { ServerConfigurationReader } from "../../config-reader";

export class ClientGameWebsiteConfigReader extends ServerConfigurationReader<GameWebsiteServer> {

    private static _instance: Nullable<ServerConfigurationReader<GameWebsiteServer>>;

    public static getInstance(environment: EnvironmentType): ClientGameWebsiteConfigReader {
        if (!this._instance) {
            this._instance = new ServerConfigurationReader<GameWebsiteServer>(ApplicationName.GameWebsite, environment);
        }
        return this._instance;
    }

}
