import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constants";
import { LogsShared } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/core.nullable";

import { SharedConfigurationReader } from "../../config-reader";

export class SharedLogsConfigReader extends SharedConfigurationReader<LogsShared> {

    private static _instance: Nullable<SharedConfigurationReader<LogsShared>>;

    public static getInstance(environment: EnvironmentType): SharedLogsConfigReader {
        if (!this._instance) {
            this._instance = new SharedConfigurationReader<LogsShared>(ApplicationName.Logs, environment);
        }
        return this._instance;
    }

}
