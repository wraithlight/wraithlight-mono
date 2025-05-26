import { ApplicationName } from "@wraithlight/core.auth.constant";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { CommsSSSClient } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/framework.nullable";

import { ClientConfigurationReader } from "../../../config-reader";

export class ClientCommsSSSConfigReader
  extends ClientConfigurationReader<CommsSSSClient> {

  private static _instance: Nullable<
  ClientConfigurationReader<CommsSSSClient>
  >;

  public static getInstance(
    environment: EnvironmentType
  ): ClientCommsSSSConfigReader {
    if (!this._instance) {
      this._instance = new ClientConfigurationReader<CommsSSSClient>(
        ApplicationName.CommsSSS,
        environment
      );
    }
    return this._instance;
  }

}
