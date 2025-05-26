import { ApplicationName } from "@wraithlight/core.auth.constant";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { CommsPSSServer } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/framework.nullable";

import { ServerConfigurationReader } from "../../../config-reader";

export class ServerCommsPSSConfigReader
  extends ServerConfigurationReader<CommsPSSServer> {

  private static _instance: Nullable<
    ServerConfigurationReader<CommsPSSServer>
  >;

  public static getInstance(
    environment: EnvironmentType
  ): ServerCommsPSSConfigReader {
    if (!this._instance) {
      this._instance = new ServerConfigurationReader<CommsPSSServer>(
        ApplicationName.CommsPSS,
        environment
      );
    }
    return this._instance;
  }

}
