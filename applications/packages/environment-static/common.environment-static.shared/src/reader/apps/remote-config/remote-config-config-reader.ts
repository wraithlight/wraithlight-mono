import { ApplicationName } from "@wraithlight/core.auth.constant";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { RemoteConfigShared } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/core.nullable";

import { SharedConfigurationReader } from "../../config-reader";

export class SharedRemoteConfigConfigReader
  extends SharedConfigurationReader<RemoteConfigShared> {

  private static _instance: Nullable<
    SharedConfigurationReader<RemoteConfigShared>
  >;

  public static getInstance(
    environment: EnvironmentType
  ): SharedRemoteConfigConfigReader {
    if (!this._instance) {
      this._instance = new SharedConfigurationReader<RemoteConfigShared>(
        ApplicationName.RemoteConfig,
        environment
      );
    }
    return this._instance;
  }

}
