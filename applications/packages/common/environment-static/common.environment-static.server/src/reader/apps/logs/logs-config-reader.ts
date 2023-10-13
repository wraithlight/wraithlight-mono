import { Nullable } from "@wraithlight/core.types";
import { LogsServer } from "@wraithlight/core.environment-static.types";
import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constants";

import { ServerConfigurationReader } from "../../config-reader";

export class ServerLogsConfigReader extends ServerConfigurationReader<LogsServer> {

    private static _instance: Nullable<ServerConfigurationReader<LogsServer>>;

    public static getInstance(environment: EnvironmentType): ServerLogsConfigReader {
        if (!this._instance) {
            this._instance = new ServerConfigurationReader<LogsServer>(ApplicationName.Logs, environment);
        }
        return this._instance;
    }

}
