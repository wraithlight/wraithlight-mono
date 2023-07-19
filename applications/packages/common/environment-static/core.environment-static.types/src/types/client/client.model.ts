import { ApplicationStatic, EnvironmentStatic } from "../_internal";

import {
    ContentClient,
    EditorClient,
    ForumClient,
    GameApplicationClient,
    GameWebsiteClient,
    LogsClient,
    UserManagementClient,
    WebsiteClient
} from "./apps";

export interface EnvironmentStaticClient extends ApplicationStatic<
    EnvironmentStatic<ContentClient>,
    EnvironmentStatic<EditorClient>,
    EnvironmentStatic<ForumClient>,
    EnvironmentStatic<GameApplicationClient>,
    EnvironmentStatic<GameWebsiteClient>,
    EnvironmentStatic<LogsClient>,
    EnvironmentStatic<UserManagementClient>,
    EnvironmentStatic<WebsiteClient>
> { }
