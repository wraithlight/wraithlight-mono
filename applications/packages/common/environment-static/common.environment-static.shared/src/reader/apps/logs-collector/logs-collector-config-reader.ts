import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constants";
import { LogsCollectorShared } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/core.nullable";

import { SharedConfigurationReader } from "../../config-reader";

export class SharedLogsCollectorConfigReader extends SharedConfigurationReader<LogsCollectorShared> {

    private static _instance: Nullable<SharedConfigurationReader<LogsCollectorShared>>;

    public static getInstance(environment: EnvironmentType): SharedLogsCollectorConfigReader {
        if (!this._instance) {
            this._instance = new SharedConfigurationReader<LogsCollectorShared>(ApplicationName.LogsCollector, environment);
        }
        return this._instance;
    }

}
