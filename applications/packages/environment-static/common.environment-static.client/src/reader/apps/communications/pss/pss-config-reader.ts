import { ApplicationName } from "@wraithlight/core.auth.constant";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { CommsPSSClient } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/framework.nullable";

import { ClientConfigurationReader } from "../../../config-reader";

export class ClientCommsPSSConfigReader
  extends ClientConfigurationReader<CommsPSSClient> {

  private static _instance: Nullable<
    ClientConfigurationReader<CommsPSSClient>
  >;

  public static getInstance(
    environment: EnvironmentType
  ): ClientCommsPSSConfigReader {
    if (!this._instance) {
      this._instance = new ClientConfigurationReader<CommsPSSClient>(
        ApplicationName.CommsPSS,
        environment
      );
    }
    return this._instance;
  }

}
