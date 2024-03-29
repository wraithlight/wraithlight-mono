import { ApplicationName } from "@wraithlight/core.auth.constant";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { LogsClient } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/core.nullable";

import { ClientConfigurationReader } from "../../config-reader";

export class ClientLogsConfigReader
    extends ClientConfigurationReader<LogsClient> {

    private static _instance: Nullable<
        ClientConfigurationReader<LogsClient>>;

    public static getInstance(
        environment: EnvironmentType
    ):ClientLogsConfigReader {
        if (!this._instance) {
            this._instance = new ClientConfigurationReader<LogsClient>(
                 ApplicationName.Logs,
                environment
            );
        }
        return this._instance;
    }

}
