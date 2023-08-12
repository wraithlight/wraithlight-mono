import { Nullable } from "@wraithlight/core.types";
import { GameWebsiteShared } from "@wraithlight/core.environment-static.types";
import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constant";

import { SharedConfigurationReader } from "../../config-reader";

export class ClientGameWebsiteConfigReader extends SharedConfigurationReader<GameWebsiteShared> {

    private static _instance: Nullable<SharedConfigurationReader<GameWebsiteShared>>;

    public static getInstance(environment: EnvironmentType): ClientGameWebsiteConfigReader {
        if (!this._instance) {
            this._instance = new SharedConfigurationReader<GameWebsiteShared>(ApplicationName.GameWebsite, environment);
        }
        return this._instance;
    }

}
