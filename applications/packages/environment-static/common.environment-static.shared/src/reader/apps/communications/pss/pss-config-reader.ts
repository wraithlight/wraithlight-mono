import { ApplicationName } from "@wraithlight/core.auth.constant";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { CommsPSSShared } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/framework.nullable";

import { SharedConfigurationReader } from "../../../config-reader";

export class SharedCommsPSSConfigReader
  extends SharedConfigurationReader<CommsPSSShared> {

  private static _instance: Nullable<
    SharedConfigurationReader<CommsPSSShared>
  >;

  public static getInstance(
    environment: EnvironmentType
  ): SharedCommsPSSConfigReader {
    if (!this._instance) {
      this._instance = new SharedConfigurationReader<CommsPSSShared>(
        ApplicationName.CommsPSS,
        environment
      );
    }
    return this._instance;
  }

}
