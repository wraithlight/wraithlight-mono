import { EnumToPrimitiveUnion } from "@wraithlight/framework.type-utils";

export enum ApplicationName {
  Website = "WEBSITE",
  GameWebsite = "GAME_WEBSITE",
  GameApplication = "GAME_APPLICATION",
  Content = "CONTENT",
  UserManagement = "USER_MANAGEMENT",
  Forum = "FORUM",
  Logs = "LOGS",
  Editor = "EDITOR",
  Notifier = "NOTIFIER",
  RemoteConfig = "REMOTE_CONFIG"
}

export type ApplicationNames = EnumToPrimitiveUnion<ApplicationName>;
