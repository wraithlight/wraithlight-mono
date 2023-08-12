import { Nullable } from "@wraithlight/core.types";
import { EditorServer } from "@wraithlight/core.environment-static.types";
import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constant";

import { ServerConfigurationReader } from "../../config-reader";

export class ServerNotifierConfigReader extends ServerConfigurationReader<EditorServer> {

    private static _instance: Nullable<ServerConfigurationReader<EditorServer>>;

    public static getInstance(environment: EnvironmentType): ServerNotifierConfigReader {
        if (!this._instance) {
            this._instance = new ServerConfigurationReader<EditorServer>(ApplicationName.Notifier, environment);
        }
        return this._instance;
    }

}
