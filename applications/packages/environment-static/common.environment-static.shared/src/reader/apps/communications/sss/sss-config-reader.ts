import { ApplicationName } from "@wraithlight/core.auth.constant";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { CommsSSSShared } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/framework.nullable";

import { SharedConfigurationReader } from "../../../config-reader";

export class SharedCommsSSSConfigReader
  extends SharedConfigurationReader<CommsSSSShared> {

  private static _instance: Nullable<
    SharedConfigurationReader<CommsSSSShared>
  >;

  public static getInstance(
    environment: EnvironmentType
  ): SharedCommsSSSConfigReader {
    if (!this._instance) {
      this._instance = new SharedConfigurationReader<CommsSSSShared>(
        ApplicationName.CommsSSS,
        environment
      );
    }
    return this._instance;
  }

}
