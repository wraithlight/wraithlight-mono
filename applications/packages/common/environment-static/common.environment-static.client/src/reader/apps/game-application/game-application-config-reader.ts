import { Nullable } from "@wraithlight/core/core.types";
import { GameApplicationClient } from "@wraithlight/core.environment-static.types";
import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constant";

import { ClientConfigurationReader } from "../../config-reader";

export class ClientGameApplicationConfigReader extends ClientConfigurationReader<GameApplicationClient> {

    private static _instance: Nullable<ClientConfigurationReader<GameApplicationClient>>;

    public static getInstance(environment: EnvironmentType): ClientGameApplicationConfigReader {
        if (!this._instance) {
            this._instance = new ClientConfigurationReader<GameApplicationClient>(ApplicationName.GameApplication, environment);
        }
        return this._instance;
    }

}
