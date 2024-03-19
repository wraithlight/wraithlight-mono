import { ApplicationName } from "@wraithlight/core.common-constants";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { ConfigurationReader } from "@wraithlight/core.environment-static.sdk";
import { CommonClient } from "@wraithlight/core.environment-static.types";

import { CLIENT_CONFIG } from "../configuration";

export class ClientConfigurationReader<TApplication>
    extends ConfigurationReader<TApplication, CommonClient> {

    constructor(
        private readonly _application: ApplicationName,
        private readonly _environment: EnvironmentType
    ) {
        super(
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            CLIENT_CONFIG[_application][_environment] as TApplication,
            CLIENT_CONFIG.common[_environment]
        );
    }

}
