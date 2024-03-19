import { ApplicationName } from "@wraithlight/core.common-constants";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { ConfigurationReader } from "@wraithlight/core.environment-static.sdk";
import { CommonServer } from "@wraithlight/core.environment-static.types";

import { SERVER_CONFIG } from "../configuration";

export class ServerConfigurationReader<TApplication>
    extends ConfigurationReader<TApplication, CommonServer> {

    constructor(
        private readonly _application: ApplicationName,
        private readonly _environment: EnvironmentType
    ) {
        super(
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            SERVER_CONFIG[_application][_environment] as TApplication,
            SERVER_CONFIG.common[_environment]
        );
    }

}
