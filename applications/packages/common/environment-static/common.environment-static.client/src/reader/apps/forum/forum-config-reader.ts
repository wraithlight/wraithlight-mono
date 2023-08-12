import { Nullable } from "@wraithlight/core.types";
import { ForumClient } from "@wraithlight/core.environment-static.types";
import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constant";

import { ClientConfigurationReader } from "../../config-reader";

export class ClientForumConfigReader extends ClientConfigurationReader<ForumClient> {

    private static _instance: Nullable<ClientConfigurationReader<ForumClient>>;

    public static getInstance(environment: EnvironmentType): ClientForumConfigReader {
        if (!this._instance) {
            this._instance = new ClientConfigurationReader<ForumClient>(ApplicationName.Forum, environment);
        }
        return this._instance;
    }

}
