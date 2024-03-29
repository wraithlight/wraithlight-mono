import {
    ApplicationId,
    ApplicationName
} from "@wraithlight/core.auth.constant";
import { LoginScope } from "@wraithlight/core.auth.types";
import { Guid } from "@wraithlight/core.guid";

export const SCOPE_NAME_MAP: {[key in ApplicationName]: Guid } = Object.freeze({
    [LoginScope.Website]: ApplicationId.WEBSITE,
    [LoginScope.GameWebsite]: ApplicationId.GAME_WEBSITE,
    [LoginScope.GameApplication]: ApplicationId.GAME_APPLICATION,
    [LoginScope.Content]: ApplicationId.CONTENT,
    [LoginScope.UserManagement]: ApplicationId.USER_MANAGEMENT,
    [LoginScope.Forum]: ApplicationId.FORUM,
    [LoginScope.Logs]: ApplicationId.LOGS,
    [LoginScope.Editor]: ApplicationId.EDITOR,
    [LoginScope.Notifier]: ApplicationId.NOTIFIER,
    [LoginScope.RemoteConfig]: ApplicationId.REMOTE_CONFIG
});
