import { ApplicationName } from "@wraithlight/core.auth.constant";

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
  TCommsESS,
  TCommsNPS,
  TCommsPSS,
  TCommsSSS
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
  [ApplicationName.CommsESS]: TCommsESS
  [ApplicationName.CommsNPS]: TCommsNPS
  [ApplicationName.CommsPSS]: TCommsPSS
  [ApplicationName.CommsSSS]: TCommsSSS
}
