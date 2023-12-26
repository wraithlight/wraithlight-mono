import { Nullable } from "@wraithlight/core.nullable";
import { LogsClient } from "@wraithlight/core.environment-static.types";
import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constants";

import { ClientConfigurationReader } from "../../config-reader";

export class ClientLogsConfigReader extends ClientConfigurationReader<LogsClient> {

    private static _instance: Nullable<ClientConfigurationReader<LogsClient>>;

    public static getInstance(environment: EnvironmentType): ClientLogsConfigReader {
        if (!this._instance) {
            this._instance = new ClientConfigurationReader<LogsClient>(ApplicationName.Logs, environment);
        }
        return this._instance;
    }

}
