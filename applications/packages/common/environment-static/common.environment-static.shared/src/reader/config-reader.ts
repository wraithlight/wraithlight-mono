import { ConfigurationReader } from "@wraithlight/core.environment-static.sdk";
import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constant";
import { CommonShared } from "@wraithlight/core.environment-static.types";

import { SHARED_CONFIG } from "../configuration";

export class SharedConfigurationReader<TApplication> extends ConfigurationReader<TApplication, CommonShared> {

    constructor(
        private readonly _application: ApplicationName,
        private readonly _environment: EnvironmentType
    ) {
        super(
            SHARED_CONFIG[_application][_environment] as TApplication,
            SHARED_CONFIG.common[_environment]
        );
    }

}
