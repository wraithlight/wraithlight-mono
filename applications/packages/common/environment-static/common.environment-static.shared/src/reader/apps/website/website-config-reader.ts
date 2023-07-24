import { Nullable } from "@wraithlight/core/core.types";
import { WebsiteShared } from "@wraithlight/core.environment-static.types";
import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constant";

import { SharedConfigurationReader } from "../../config-reader";

export class ClientWebsiteConfigReader extends SharedConfigurationReader<WebsiteShared> {

    private static _instance: Nullable<SharedConfigurationReader<WebsiteShared>>;

    public static getInstance(environment: EnvironmentType): ClientWebsiteConfigReader {
        if (!this._instance) {
            this._instance = new SharedConfigurationReader<WebsiteShared>(ApplicationName.Website, environment);
        }
        return this._instance;
    }

}
