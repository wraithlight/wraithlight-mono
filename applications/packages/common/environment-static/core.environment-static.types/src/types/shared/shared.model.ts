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
import { CommonShared } from "./common";

export interface EnvironmentStaticShared extends ApplicationStatic<
    EnvironmentStatic<ContentShared>,
    EnvironmentStatic<EditorShared>,
    EnvironmentStatic<ForumShared>,
    EnvironmentStatic<GameApplicationShared>,
    EnvironmentStatic<GameWebsiteShared>,
    EnvironmentStatic<LogsShared>,
    EnvironmentStatic<UserManagementShared>,
    EnvironmentStatic<WebsiteShared>
> {
    common: CommonShared
}
