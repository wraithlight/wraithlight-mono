import { ApplicationName } from "@wraithlight/core.auth.constant";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { NotifierShared } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/core.nullable";

import { SharedConfigurationReader } from "../../config-reader";

export class SharedNotifierConfigReader
  extends SharedConfigurationReader<NotifierShared> {

  private static _instance: Nullable<
    SharedConfigurationReader<NotifierShared>
  >;

  public static getInstance(
    environment: EnvironmentType
  ): SharedNotifierConfigReader {
    if (!this._instance) {
      this._instance = new SharedConfigurationReader<NotifierShared>(
        ApplicationName.Notifier,
        environment
      );
    }
    return this._instance;
  }

}
