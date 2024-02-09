import { ApplicationStatic, EnvironmentStatic } from "../_internal";

import {
    ContentClient,
    EditorClient,
    ForumClient,
    GameApplicationClient,
    GameWebsiteClient,
    LogsClient,
    LogsCollectorClient,
    NotifierClient,
    RemoteConfigClient,
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
    EnvironmentStatic<NotifierClient>,
    EnvironmentStatic<RemoteConfigClient>,
    EnvironmentStatic<LogsCollectorClient>
> {
    common: EnvironmentStatic<CommonClient>
}
