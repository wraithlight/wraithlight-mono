import { ApplicationName } from "@wraithlight/core.auth.constant";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { CommsESSServer } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/framework.nullable";

import { ServerConfigurationReader } from "../../../config-reader";

export class ServerCommsESSConfigReader
  extends ServerConfigurationReader<CommsESSServer> {

  private static _instance: Nullable<
    ServerConfigurationReader<CommsESSServer>
  >;

  public static getInstance(
    environment: EnvironmentType
  ): ServerCommsESSConfigReader {
    if (!this._instance) {
      this._instance = new ServerConfigurationReader<CommsESSServer>(
        ApplicationName.CommsESS,
        environment
      );
    }
    return this._instance;
  }

}
