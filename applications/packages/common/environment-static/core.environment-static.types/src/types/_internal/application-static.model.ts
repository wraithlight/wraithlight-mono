import { ApplicationName } from "@wraithlight/core.common-constants";

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
    TRemoteConfig,
    TLogsCollectorConfig
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
    [ApplicationName.RemoteConfig]: TRemoteConfig,
    [ApplicationName.LogsCollector]: TLogsCollectorConfig
}
