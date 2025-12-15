import { ApplicationName } from "@wraithlight/core.auth.constant";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { ContentShared } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/core.nullable";

import { SharedConfigurationReader } from "../../config-reader";

export class SharedContentConfigReader
  extends SharedConfigurationReader<ContentShared> {

  private static _instance: Nullable<
    SharedConfigurationReader<ContentShared>
  >;

  public static getInstance(
    environment: EnvironmentType
  ): SharedContentConfigReader {
    if (!this._instance) {
      this._instance = new SharedConfigurationReader<ContentShared>(
        ApplicationName.Content,
        environment
      );
    }
    return this._instance;
  }

}
