import { ApplicationName } from "@wraithlight/core.auth.constant";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { CommsNPSShared } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/framework.nullable";

import { SharedConfigurationReader } from "../../../config-reader";

export class SharedCommsNPSConfigReader
  extends SharedConfigurationReader<CommsNPSShared> {

  private static _instance: Nullable<
    SharedConfigurationReader<CommsNPSShared>
  >;

  public static getInstance(
    environment: EnvironmentType
  ): SharedCommsNPSConfigReader {
    if (!this._instance) {
      this._instance = new SharedConfigurationReader<CommsNPSShared>(
        ApplicationName.CommsNPS,
        environment
      );
    }
    return this._instance;
  }

}
