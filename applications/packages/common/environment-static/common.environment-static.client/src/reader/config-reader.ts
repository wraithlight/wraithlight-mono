import { ConfigurationReader } from "@wraithlight/core.environment-static.sdk";
import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constant";

import { CLIENT_CONFIG } from "../configuration";

export class ClientConfigurationReader<TApplication> extends ConfigurationReader<TApplication> {

    constructor(
        readonly application: ApplicationName,
        readonly environment: EnvironmentType
    ) {
        super(CLIENT_CONFIG[application][environment] as TApplication);
    }

}
