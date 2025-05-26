import { ApplicationName } from "@wraithlight/core.auth.constant";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { CommsNPSClient } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/framework.nullable";

import { ClientConfigurationReader } from "../../../config-reader";

export class ClientCommsNPSConfigReader
  extends ClientConfigurationReader<CommsNPSClient> {

  private static _instance: Nullable<
    ClientConfigurationReader<CommsNPSClient>
  >;

  public static getInstance(
    environment: EnvironmentType
  ): ClientCommsNPSConfigReader {
    if (!this._instance) {
      this._instance = new ClientConfigurationReader<CommsNPSClient>(
        ApplicationName.CommsNPS,
        environment
      );
    }
    return this._instance;
  }

}
