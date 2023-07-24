import { ConfigurationReader } from "@wraithlight/core.environment-static.sdk";
import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constant";

import { SHARED_CONFIG } from "../configuration";

export class SharedConfigurationReader<TApplication> extends ConfigurationReader<TApplication> {

    constructor(
        readonly application: ApplicationName,
        readonly environment: EnvironmentType
    ) {
        super(SHARED_CONFIG[application][environment] as TApplication);
    }

}
