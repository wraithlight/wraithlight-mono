import { ApplicationName } from "@wraithlight/core.common-constants";
import { EnvironmentStaticClient } from "@wraithlight/core.environment-static.types";

import { CLIENT_COMMON_CONFIG } from "./common";
import { CLIENT_CONTENT_CONFIG } from "./content";
import { CLIENT_EDITOR_CONFIG } from "./editor";
import { CLIENT_FORUM_CONFIG } from "./forum";
import { CLIENT_GAME_APPLICATION_CONFIG } from "./game-application";
import { CLIENT_GAME_WEBSITE_CONFIG } from "./game-website";
import { CLIENT_LOGS_CONFIG } from "./logs";
import { CLIENT_NOTIFIER_CONFIG } from "./notifier";
import { CLIENT_REMOTE_CONFIG_CONFIG } from "./remote-config";
import { CLIENT_USER_MANAGEMENT_CONFIG } from "./user-management";
import { CLIENT_WEBSITE_CONFIG } from "./website";

export const CLIENT_CONFIG: Readonly<EnvironmentStaticClient> = {
    [ApplicationName.Content]: CLIENT_CONTENT_CONFIG,
    [ApplicationName.Editor]: CLIENT_EDITOR_CONFIG,
    [ApplicationName.Forum]: CLIENT_FORUM_CONFIG,
    [ApplicationName.GameApplication]: CLIENT_GAME_APPLICATION_CONFIG,
    [ApplicationName.GameWebsite]: CLIENT_GAME_WEBSITE_CONFIG,
    [ApplicationName.Logs]: CLIENT_LOGS_CONFIG,
    [ApplicationName.UserManagement]: CLIENT_USER_MANAGEMENT_CONFIG,
    [ApplicationName.Website]: CLIENT_WEBSITE_CONFIG,
    [ApplicationName.Notifier]: CLIENT_NOTIFIER_CONFIG,
    [ApplicationName.RemoteConfig]: CLIENT_REMOTE_CONFIG_CONFIG,
    common: CLIENT_COMMON_CONFIG
};
