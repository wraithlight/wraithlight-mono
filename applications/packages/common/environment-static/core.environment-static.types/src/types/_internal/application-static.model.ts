import { ApplicationName } from "@wraithlight/core.common-constant";

export interface ApplicationStatic<
    TContent,
    TEditor,
    TForum,
    TGameApplication,
    TGameWebsite,
    TLogs,
    TUserManagement,
    TWebsite,
    TNotifier,
    TRemoteConfig
> {
    [ApplicationName.Content]: TContent,
    [ApplicationName.Editor]: TEditor,
    [ApplicationName.Forum]: TForum,
    [ApplicationName.GameApplication]: TGameApplication,
    [ApplicationName.GameWebsite]: TGameWebsite,
    [ApplicationName.Logs]: TLogs,
    [ApplicationName.UserManagement]: TUserManagement,
    [ApplicationName.Website]: TWebsite,
    [ApplicationName.Notifier]: TNotifier,
    [ApplicationName.RemoteConfig]: TRemoteConfig
}
