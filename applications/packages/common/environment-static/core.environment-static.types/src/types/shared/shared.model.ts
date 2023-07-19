import { ApplicationStatic, EnvironmentStatic } from "../_internal";

import {
    ContentShared,
    EditorShared,
    ForumShared,
    GameApplicationShared,
    GameWebsiteShared,
    LogsShared,
    UserManagementShared,
    WebsiteShared
} from "./apps";

export interface EnvironmentStaticClient extends ApplicationStatic<
    EnvironmentStatic<ContentShared>,
    EnvironmentStatic<EditorShared>,
    EnvironmentStatic<ForumShared>,
    EnvironmentStatic<GameApplicationShared>,
    EnvironmentStatic<GameWebsiteShared>,
    EnvironmentStatic<LogsShared>,
    EnvironmentStatic<UserManagementShared>,
    EnvironmentStatic<WebsiteShared>
> { }
