import { ApplicationName } from "@wraithlight/core.auth.constant";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { ForumShared } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/core.nullable";

import { SharedConfigurationReader } from "../../config-reader";

export class ClientForumConfigReader
  extends SharedConfigurationReader<ForumShared> {

  private static _instance: Nullable<
    SharedConfigurationReader<ForumShared>>;

  public static getInstance(
    environment: EnvironmentType
  ): ClientForumConfigReader {
    if (!this._instance) {
      this._instance = new SharedConfigurationReader<ForumShared>(
        ApplicationName.Forum,
        environment
      );
    }
    return this._instance;
  }

}
