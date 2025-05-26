import { ApplicationName } from "@wraithlight/core.auth.constant";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { CommsESSClient } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/framework.nullable";

import { ClientConfigurationReader } from "../../../config-reader";

export class ClientCommsESSConfigReader
  extends ClientConfigurationReader<CommsESSClient> {

  private static _instance: Nullable<
    ClientConfigurationReader<CommsESSClient>
  >;

  public static getInstance(
    environment: EnvironmentType
  ): ClientCommsESSConfigReader {
    if (!this._instance) {
      this._instance = new ClientConfigurationReader<CommsESSClient>(
        ApplicationName.CommsESS,
        environment
      );
    }
    return this._instance;
  }

}
