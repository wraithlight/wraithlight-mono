import { ApplicationName } from "@wraithlight/core.auth.constant";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { EditorServer } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/core.nullable";

import { ServerConfigurationReader } from "../../config-reader";

export class ServerEditorConfigReader
    extends ServerConfigurationReader<EditorServer> {

    private static _instance: Nullable<
        ServerConfigurationReader<EditorServer>>;

    public static getInstance(
        environment: EnvironmentType
    ):ServerEditorConfigReader {
        if (!this._instance) {
            this._instance = new ServerConfigurationReader<EditorServer>(
                ApplicationName.Editor,
                environment
            );
        }
        return this._instance;
    }

}
