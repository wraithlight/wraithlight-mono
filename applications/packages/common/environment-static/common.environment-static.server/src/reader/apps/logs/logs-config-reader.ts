import { Nullable } from "@wraithlight/core/core.types";
import { LogsServer } from "@wraithlight/core.environment-static.types";
import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constant";

import { ServerConfigurationReader } from "../../config-reader";

export class ClientLogsConfigReader extends ServerConfigurationReader<LogsServer> {

    private static _instance: Nullable<ServerConfigurationReader<LogsServer>>;

    public static getInstance(environment: EnvironmentType): ClientLogsConfigReader {
        if (!this._instance) {
            this._instance = new ServerConfigurationReader<LogsServer>(ApplicationName.Logs, environment);
        }
        return this._instance;
    }

}
