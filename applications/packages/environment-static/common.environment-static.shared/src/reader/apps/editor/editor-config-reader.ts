import { ApplicationName } from "@wraithlight/core.auth.constant";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { EditorShared } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/core.nullable";

import { SharedConfigurationReader } from "../../config-reader";

export class SharedEditorConfigReader
  extends SharedConfigurationReader<EditorShared> {

  private static _instance: Nullable<
    SharedConfigurationReader<EditorShared>>;

  public static getInstance(
    environment: EnvironmentType
  ): SharedEditorConfigReader {
    if (!this._instance) {
      this._instance = new SharedConfigurationReader<EditorShared>(
        ApplicationName.Editor,
        environment
      );
    }
    return this._instance;
  }

}
