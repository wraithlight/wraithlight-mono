import { ApplicationName } from "@wraithlight/core.auth.constant";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { WebsiteServer } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/core.nullable";

import { ServerConfigurationReader } from "../../config-reader";

export class ServerWebsiteConfigReader
    extends ServerConfigurationReader<WebsiteServer> {

    private static _instance: Nullable<
        ServerConfigurationReader<WebsiteServer>>;

    public static getInstance(
        environment: EnvironmentType
    ):ServerWebsiteConfigReader {
        if (!this._instance) {
            this._instance = new ServerConfigurationReader<WebsiteServer>(
                 ApplicationName.Website,
                environment
            );
        }
        return this._instance;
    }

}
