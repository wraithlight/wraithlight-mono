import { ApplicationName } from "@wraithlight/core.auth.constant";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { EditorClient } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/core.nullable";

import { ClientConfigurationReader } from "../../config-reader";

export class ClientEditorConfigReader extends ClientConfigurationReader<EditorClient> {

    private static _instance: Nullable<ClientConfigurationReader<EditorClient>>;

    public static getInstance(environment: EnvironmentType): ClientEditorConfigReader {
        if (!this._instance) {
            this._instance = new ClientConfigurationReader<EditorClient>(ApplicationName.Editor, environment);
        }
        return this._instance;
    }

}
