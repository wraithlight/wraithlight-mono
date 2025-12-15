import { ApplicationName } from "@wraithlight/core.auth.constant";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { ConfigurationReader } from "@wraithlight/core.environment-static.sdk";
import { CommonShared } from "@wraithlight/core.environment-static.types";

import { SHARED_CONFIG } from "../configuration";

export class SharedConfigurationReader<TApplication>
  extends ConfigurationReader<TApplication, CommonShared> {

  constructor(
    private readonly _application: ApplicationName,
    private readonly _environment: EnvironmentType
  ) {
    super(
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      SHARED_CONFIG[_application][_environment] as TApplication,
      SHARED_CONFIG.common[_environment]
    );
  }

}
