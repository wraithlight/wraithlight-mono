import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constants";
import { LogsCollectorClient } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/core.nullable";

import { ClientConfigurationReader } from "../../config-reader";

export class ClientLogsCollectorConfigReader extends ClientConfigurationReader<LogsCollectorClient> {

    private static _instance: Nullable<ClientConfigurationReader<LogsCollectorClient>>;

    public static getInstance(environment: EnvironmentType): ClientLogsCollectorConfigReader {
        if (!this._instance) {
            this._instance = new ClientConfigurationReader<LogsCollectorClient>(
                ApplicationName.LogsCollector,
                environment
            );
        }
        return this._instance;
    }

}
