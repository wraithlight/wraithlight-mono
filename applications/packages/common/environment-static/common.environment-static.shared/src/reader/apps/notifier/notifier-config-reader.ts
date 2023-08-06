import { Nullable } from "@wraithlight/core/core.types";
import { NotifierShared } from "@wraithlight/core.environment-static.types";
import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constant";

import { SharedConfigurationReader } from "../../config-reader";

export class SharedNotifierConfigReader extends SharedConfigurationReader<NotifierShared> {

    private static _instance: Nullable<SharedConfigurationReader<NotifierShared>>;

    public static getInstance(environment: EnvironmentType): SharedNotifierConfigReader {
        if (!this._instance) {
            this._instance = new SharedConfigurationReader<NotifierShared>(ApplicationName.Notifier, environment);
        }
        return this._instance;
    }

}
