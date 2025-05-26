import { ApplicationName } from "@wraithlight/core.auth.constant";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { CommsESSShared } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/framework.nullable";

import { SharedConfigurationReader } from "../../../config-reader";

export class SharedCommsESSConfigReader
  extends SharedConfigurationReader<CommsESSShared> {

  private static _instance: Nullable<
    SharedConfigurationReader<CommsESSShared>
  >;

  public static getInstance(
    environment: EnvironmentType
  ): SharedCommsESSConfigReader {
    if (!this._instance) {
      this._instance = new SharedConfigurationReader<CommsESSShared>(
        ApplicationName.CommsESS,
        environment
      );
    }
    return this._instance;
  }

}
