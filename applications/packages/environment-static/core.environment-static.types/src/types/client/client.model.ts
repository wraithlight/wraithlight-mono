import { ApplicationStatic, EnvironmentStatic } from "../_internal";

import {
  CommsESSClient,
  CommsNPSClient,
  CommsPSSClient,
  CommsSSSClient,
  ContentClient,
  EditorClient,
  ForumClient,
  GameApplicationClient,
  GameWebsiteClient,
  LogsClient,
  NotifierClient,
  RemoteConfigClient,
  UserManagementClient,
  WebsiteClient
} from "./apps";
import { CommonClient } from "./common";

export interface EnvironmentStaticClient extends ApplicationStatic<
  EnvironmentStatic<ContentClient>,
  EnvironmentStatic<EditorClient>,
  EnvironmentStatic<ForumClient>,
  EnvironmentStatic<GameApplicationClient>,
  EnvironmentStatic<GameWebsiteClient>,
  EnvironmentStatic<LogsClient>,
  EnvironmentStatic<UserManagementClient>,
  EnvironmentStatic<WebsiteClient>,
  EnvironmentStatic<NotifierClient>,
  EnvironmentStatic<RemoteConfigClient>,
  EnvironmentStatic<CommsESSClient>,
  EnvironmentStatic<CommsNPSClient>,
  EnvironmentStatic<CommsPSSClient>,
  EnvironmentStatic<CommsSSSClient>
> {
  common: EnvironmentStatic<CommonClient>
}
