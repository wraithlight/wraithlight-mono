import { ConfigurationReader } from "@wraithlight/core.environment-static.sdk";
import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constant";

import { SERVER_CONFIG } from "../configuration";

export class ServerConfigurationReader<TApplication> extends ConfigurationReader<TApplication> {

    constructor(
        readonly application: ApplicationName,
        readonly environment: EnvironmentType
    ) {
        super(SERVER_CONFIG[application][environment] as TApplication);
    }

}
