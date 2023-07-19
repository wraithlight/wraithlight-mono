import { ApplicationStatic, EnvironmentStatic } from "../_internal";

import {
    ContentServer,
    EditorServer,
    ForumServer,
    GameApplicationServer,
    GameWebsiteServer,
    LogsServer,
    UserManagementServer,
    WebsiteServer
} from "./apps";

export interface EnvironmentStaticServer extends ApplicationStatic<
    EnvironmentStatic<ContentServer>,
    EnvironmentStatic<EditorServer>,
    EnvironmentStatic<ForumServer>,
    EnvironmentStatic<GameApplicationServer>,
    EnvironmentStatic<GameWebsiteServer>,
    EnvironmentStatic<LogsServer>,
    EnvironmentStatic<UserManagementServer>,
    EnvironmentStatic<WebsiteServer>
> { }
