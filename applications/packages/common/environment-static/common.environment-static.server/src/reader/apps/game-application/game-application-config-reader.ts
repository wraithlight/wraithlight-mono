import { Nullable } from "@wraithlight/core.types";
import { GameApplicationServer } from "@wraithlight/core.environment-static.types";
import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constant";

import { ServerConfigurationReader } from "../../config-reader";

export class ClientGameApplicationConfigReader extends ServerConfigurationReader<GameApplicationServer> {

    private static _instance: Nullable<ServerConfigurationReader<GameApplicationServer>>;

    public static getInstance(environment: EnvironmentType): ClientGameApplicationConfigReader {
        if (!this._instance) {
            this._instance = new ServerConfigurationReader<GameApplicationServer>(ApplicationName.GameApplication, environment);
        }
        return this._instance;
    }

}
