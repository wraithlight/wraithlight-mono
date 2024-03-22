import { ApplicationName } from "@wraithlight/core.auth.constant";
import { EnvironmentType } from "@wraithlight/core.env.types";
import { ForumClient } from "@wraithlight/core.environment-static.types";
import { Nullable } from "@wraithlight/core.nullable";

import { ClientConfigurationReader } from "../../config-reader";

export class ClientForumConfigReader
    extends ClientConfigurationReader<ForumClient> {

    private static _instance: Nullable<
        ClientConfigurationReader<ForumClient>>;

    public static getInstance(
        environment: EnvironmentType
    ):ClientForumConfigReader {
        if (!this._instance) {
            this._instance = new ClientConfigurationReader<ForumClient>(
                 ApplicationName.Forum,
                environment
            );
        }
        return this._instance;
    }

}
