import { ApplicationStatic, EnvironmentStatic } from "../_internal";

import {
    ContentServer,
    EditorServer,
    ForumServer,
    GameApplicationServer,
    GameWebsiteServer,
    LogsServer,
    NotifierServer,
    RemoteConfigServer,
    UserManagementServer,
    WebsiteServer
} from "./apps";
import { CommonServer } from "./common";

export interface EnvironmentStaticServer extends ApplicationStatic<
    EnvironmentStatic<ContentServer>,
    EnvironmentStatic<EditorServer>,
    EnvironmentStatic<ForumServer>,
    EnvironmentStatic<GameApplicationServer>,
    EnvironmentStatic<GameWebsiteServer>,
    EnvironmentStatic<LogsServer>,
    EnvironmentStatic<UserManagementServer>,
    EnvironmentStatic<WebsiteServer>,
    EnvironmentStatic<NotifierServer>,
    EnvironmentStatic<RemoteConfigServer>
> {
    common: EnvironmentStatic<CommonServer>
}
