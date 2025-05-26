import { ApplicationName } from "@wraithlight/core.auth.constant";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { CommsSSSServer } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/framework.nullable";

import { ServerConfigurationReader } from "../../../config-reader";

export class ServerCommsSSSConfigReader
  extends ServerConfigurationReader<CommsSSSServer> {

  private static _instance: Nullable<
  ServerConfigurationReader<CommsSSSServer>
  >;

  public static getInstance(
    environment: EnvironmentType
  ): ServerCommsSSSConfigReader {
    if (!this._instance) {
      this._instance = new ServerConfigurationReader<CommsSSSServer>(
        ApplicationName.CommsSSS,
        environment
      );
    }
    return this._instance;
  }

}
