import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constants";
import { GameApplicationClient } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/core.nullable";

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
