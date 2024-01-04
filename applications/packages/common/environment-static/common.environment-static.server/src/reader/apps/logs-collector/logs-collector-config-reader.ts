import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constants";
import { LogsCollectorServer } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/core.nullable";

import { ServerConfigurationReader } from "../../config-reader";

export class ServerLogsCollectorConfigReader extends ServerConfigurationReader<LogsCollectorServer> {

    private static _instance: Nullable<ServerConfigurationReader<LogsCollectorServer>>;

    public static getInstance(environment: EnvironmentType): ServerLogsCollectorConfigReader {
        if (!this._instance) {
            this._instance = new ServerConfigurationReader<LogsCollectorServer>(ApplicationName.LogsCollector, environment);
        }
        return this._instance;
    }

}
