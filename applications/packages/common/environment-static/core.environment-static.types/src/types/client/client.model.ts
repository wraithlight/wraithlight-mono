import { ApplicationStatic, EnvironmentStatic } from "../_internal";

import {
    ContentClient,
    EditorClient,
    ForumClient,
    GameApplicationClient,
    GameWebsiteClient,
    LogsClient,
    NotifierClient,
    UserManagementClient,
    WebsiteClient
} from "./apps";
import { CommonClient } from "./common";

export interface EnvironmentStaticClient extends ApplicationStatic<
    EnvironmentStatic<ContentClient>,
    EnvironmentStatic<EditorClient>,
    EnvironmentStatic<ForumClient>,
    EnvironmentStatic<GameApplicationClient>,
    EnvironmentStatic<GameWebsiteClient>,
    EnvironmentStatic<LogsClient>,
    EnvironmentStatic<UserManagementClient>,
    EnvironmentStatic<WebsiteClient>,
    EnvironmentStatic<NotifierClient>
> {
    common: EnvironmentStatic<CommonClient>
}
