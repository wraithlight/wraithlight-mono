import { Nullable } from "@wraithlight/core.types";
import { ForumClient } from "@wraithlight/core.environment-static.types";
import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constants";

import { ServerConfigurationReader } from "../../config-reader";

export class ClientForumConfigReader extends ServerConfigurationReader<ForumClient> {

    private static _instance: Nullable<ServerConfigurationReader<ForumClient>>;

    public static getInstance(environment: EnvironmentType): ClientForumConfigReader {
        if (!this._instance) {
            this._instance = new ServerConfigurationReader<ForumClient>(ApplicationName.Forum, environment);
        }
        return this._instance;
    }

}
