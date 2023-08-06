import { ConfigurationReader } from "@wraithlight/core.environment-static.sdk";
import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constant";
import { CommonShared } from "@wraithlight/core.environment-static.types";

import { SHARED_CONFIG } from "../configuration";

export class SharedConfigurationReader<TApplication> extends ConfigurationReader<TApplication, CommonShared> {

    constructor(
        readonly application: ApplicationName,
        readonly environment: EnvironmentType
    ) {
        super(
            SHARED_CONFIG[application][environment] as TApplication,
            SHARED_CONFIG.common[environment]
        );
    }

}
