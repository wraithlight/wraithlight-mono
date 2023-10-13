import { ApplicationName } from "@wraithlight/core.common-constants";

export const enum LoginScope {
    Website = ApplicationName.Website,
    GameWebsite = ApplicationName.GameWebsite,
    GameApplication = ApplicationName.GameApplication,
    Content = ApplicationName.Content,
    UserManagement = ApplicationName.UserManagement,
    Forum = ApplicationName.Forum,
    Logs = ApplicationName.Logs,
    Editor = ApplicationName.Editor,
    Notifier = ApplicationName.Notifier,
    RemoteConfig = ApplicationName.RemoteConfig
}
