import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constants";
import { ConfigurationReader } from "@wraithlight/core.environment-static.sdk";
import { CommonServer } from "@wraithlight/core.environment-static.types";

import { SERVER_CONFIG } from "../configuration";

export class ServerConfigurationReader<TApplication> extends ConfigurationReader<TApplication, CommonServer> {

    constructor(
        private readonly _application: ApplicationName,
        private readonly _environment: EnvironmentType
    ) {
        super(
            SERVER_CONFIG[_application][_environment] as TApplication,
            SERVER_CONFIG.common[_environment]
        );
    }

}
