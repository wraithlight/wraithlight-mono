import { Guid } from "@wraithlight/core.types";
import { LoginScope } from "@wraithlight/core.auth.types";
import { ApplicationId } from "@wraithlight/core.common-constant";

export const SCOPE_NAME_MAP: {[key: string]: Guid } = Object.freeze({
    [LoginScope.Website]: ApplicationId.WEBSITE,
    [LoginScope.GameWebsite]: ApplicationId.GAME_WEBSITE,
    [LoginScope.GameApplication]: ApplicationId.GAME_APPLICATION,
    [LoginScope.Content]: ApplicationId.CONTENT,
    [LoginScope.UserManagement]: ApplicationId.USER_MANAGEMENT,
    [LoginScope.Forum]: ApplicationId.FORUM,
    [LoginScope.Logs]: ApplicationId.LOGS,
    [LoginScope.Editor]: ApplicationId.EDITOR
});
