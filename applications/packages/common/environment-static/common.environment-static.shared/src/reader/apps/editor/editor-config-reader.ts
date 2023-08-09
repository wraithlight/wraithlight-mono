import { Nullable } from "@wraithlight/core/core.types";
import { EditorShared } from "@wraithlight/core.environment-static.types";
import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constant";

import { SharedConfigurationReader } from "../../config-reader";

export class SharedEditorConfigReader extends SharedConfigurationReader<EditorShared> {

    private static _instance: Nullable<SharedConfigurationReader<EditorShared>>;

    public static getInstance(environment: EnvironmentType): SharedEditorConfigReader {
        if (!this._instance) {
            this._instance = new SharedConfigurationReader<EditorShared>(ApplicationName.Editor, environment);
        }
        return this._instance;
    }

}
