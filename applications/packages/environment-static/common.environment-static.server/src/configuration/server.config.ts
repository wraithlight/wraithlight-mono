import { ApplicationName } from "@wraithlight/core.auth.constant";
import { EnvironmentStaticServer } from "@wraithlight/core.environment-static.types";

import { SERVER_COMMON_CONFIG } from "./common";
import {
  SERVER_COMMS_ESS_CONFIG,
  SERVER_COMMS_NPS_CONFIG,
  SERVER_COMMS_PSS_CONFIG,
  SERVER_COMMS_SSS_CONFIG
} from "./communications";
import { SERVER_CONTENT_CONFIG } from "./content";
import { SERVER_EDITOR_CONFIG } from "./editor";
import { SERVER_FORUM_CONFIG } from "./forum";
import { SERVER_GAME_APPLICATION_CONFIG } from "./game-application";
import { SERVER_GAME_WEBSITE_CONFIG } from "./game-website";
import { SERVER_LOGS_CONFIG } from "./logs";
import { SERVER_NOTIFIER_CONFIG } from "./notifier";
import { SERVER_REMOTE_CONFIG_CONFIG } from "./remote-config";
import { SERVER_USER_MANAGEMENT_CONFIG } from "./user-management";
import { SERVER_WEBSITE_CONFIG } from "./website";

export const SERVER_CONFIG: Readonly<
    EnvironmentStaticServer> = {
    [ApplicationName.Content]: SERVER_CONTENT_CONFIG,
    [ApplicationName.Editor]: SERVER_EDITOR_CONFIG,
    [ApplicationName.Forum]: SERVER_FORUM_CONFIG,
    [ApplicationName.GameApplication]: SERVER_GAME_APPLICATION_CONFIG,
    [ApplicationName.GameWebsite]: SERVER_GAME_WEBSITE_CONFIG,
    [ApplicationName.Logs]: SERVER_LOGS_CONFIG,
    [ApplicationName.UserManagement]: SERVER_USER_MANAGEMENT_CONFIG,
    [ApplicationName.Website]: SERVER_WEBSITE_CONFIG,
    [ApplicationName.Notifier]: SERVER_NOTIFIER_CONFIG,
    [ApplicationName.RemoteConfig]: SERVER_REMOTE_CONFIG_CONFIG,
    [ApplicationName.CommsESS]: SERVER_COMMS_ESS_CONFIG,
    [ApplicationName.CommsNPS]: SERVER_COMMS_NPS_CONFIG,
    [ApplicationName.CommsPSS]: SERVER_COMMS_PSS_CONFIG,
    [ApplicationName.CommsSSS]: SERVER_COMMS_SSS_CONFIG,
    common: SERVER_COMMON_CONFIG
};
