import { ApplicationName } from "@wraithlight/core.auth.constant";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { GameWebsiteServer } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/core.nullable";

import { ServerConfigurationReader } from "../../config-reader";

export class ServerGameWebsiteConfigReader
    extends ServerConfigurationReader<GameWebsiteServer> {

    private static _instance: Nullable<
        ServerConfigurationReader<GameWebsiteServer>>;

    public static getInstance(
        environment: EnvironmentType
    ):ServerGameWebsiteConfigReader {
        if (!this._instance) {
            this._instance = new ServerConfigurationReader<GameWebsiteServer>(
                 ApplicationName.GameWebsite,
                environment
            );
        }
        return this._instance;
    }

}
