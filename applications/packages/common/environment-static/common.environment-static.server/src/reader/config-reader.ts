import { ConfigurationReader } from "@wraithlight/core.environment-static.sdk";
import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constant";
import { CommonServer } from "@wraithlight/core.environment-static.types";

import { SERVER_CONFIG } from "../configuration";

export class ServerConfigurationReader<TApplication> extends ConfigurationReader<TApplication, CommonServer> {

    constructor(
        readonly _application: ApplicationName,
        readonly _environment: EnvironmentType
    ) {
        super(
            SERVER_CONFIG[_application][_environment] as TApplication,
            SERVER_CONFIG.common[_environment]
        );
    }

}
