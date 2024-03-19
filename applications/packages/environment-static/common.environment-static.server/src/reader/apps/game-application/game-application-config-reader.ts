import { ApplicationName } from "@wraithlight/core.common-constants";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { GameApplicationServer } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/core.nullable";

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
