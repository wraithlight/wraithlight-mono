import { ApplicationName } from "@wraithlight/core.auth.constant";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { NotifierServer } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/core.nullable";

import { ServerConfigurationReader } from "../../config-reader";

export class ServerNotifierConfigReader
    extends ServerConfigurationReader<NotifierServer> {

    private static _instance: Nullable<
        ServerConfigurationReader<NotifierServer>>;

    public static getInstance(
        environment: EnvironmentType
    ):ServerNotifierConfigReader {
        if (!this._instance) {
            this._instance = new ServerConfigurationReader<NotifierServer>(
                 ApplicationName.Notifier,
                environment
            );
        }
        return this._instance;
    }

}
