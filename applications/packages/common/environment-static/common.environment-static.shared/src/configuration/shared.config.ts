import { ApplicationName } from "@wraithlight/core.common-constant";
import { EnvironmentStaticShared } from "@wraithlight/core.environment-static.types";

import { SHARED_CONTENT_CONFIG } from "./content";
import { SHARED_EDITOR_CONFIG } from "./editor";
import { SHARED_FORUM_CONFIG } from "./forum";
import { SHARED_GAME_APPLICATION_CONFIG } from "./game-application";
import { SHARED_GAME_WEBSITE_CONFIG } from "./game-website";
import { SHARED_LOGS_CONFIG } from "./logs";
import { SHARED_USER_MANAGEMENT_CONFIG } from "./user-management";
import { SHARED_WEBSITE_CONFIG } from "./website";

export const SHARED_CONFIG: Readonly<EnvironmentStaticShared> = {
    [ApplicationName.Content]: SHARED_CONTENT_CONFIG,
    [ApplicationName.Editor]: SHARED_EDITOR_CONFIG,
    [ApplicationName.Forum]: SHARED_FORUM_CONFIG,
    [ApplicationName.GameApplication]: SHARED_GAME_APPLICATION_CONFIG,
    [ApplicationName.GameWebsite]: SHARED_GAME_WEBSITE_CONFIG,
    [ApplicationName.Logs]: SHARED_LOGS_CONFIG,
    [ApplicationName.UserManagement]: SHARED_USER_MANAGEMENT_CONFIG,
    [ApplicationName.Website]: SHARED_WEBSITE_CONFIG
}
