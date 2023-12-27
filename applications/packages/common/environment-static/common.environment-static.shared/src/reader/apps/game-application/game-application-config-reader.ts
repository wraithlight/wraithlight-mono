import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constants";
import { GameApplicationShared } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/core.nullable";

import { SharedConfigurationReader } from "../../config-reader";

export class ClientGameApplicationConfigReader extends SharedConfigurationReader<GameApplicationShared> {

    private static _instance: Nullable<SharedConfigurationReader<GameApplicationShared>>;

    public static getInstance(environment: EnvironmentType): ClientGameApplicationConfigReader {
        if (!this._instance) {
            this._instance = new SharedConfigurationReader<GameApplicationShared>(ApplicationName.GameApplication, environment);
        }
        return this._instance;
    }

}
