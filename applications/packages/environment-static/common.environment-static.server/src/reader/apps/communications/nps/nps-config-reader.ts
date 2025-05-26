import { ApplicationName } from "@wraithlight/core.auth.constant";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { CommsNPSServer } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/framework.nullable";

import { ServerConfigurationReader } from "../../../config-reader";

export class ServerCommsNPSConfigReader
  extends ServerConfigurationReader<CommsNPSServer> {

  private static _instance: Nullable<
    ServerConfigurationReader<CommsNPSServer>
  >;

  public static getInstance(
    environment: EnvironmentType
  ): ServerCommsNPSConfigReader {
    if (!this._instance) {
      this._instance = new ServerConfigurationReader<CommsNPSServer>(
        ApplicationName.CommsNPS,
        environment
      );
    }
    return this._instance;
  }

}
