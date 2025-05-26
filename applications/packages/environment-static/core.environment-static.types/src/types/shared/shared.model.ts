import { ApplicationStatic, EnvironmentStatic } from "../_internal";

import {
  CommsESSShared,
  CommsNPSShared,
  CommsPSSShared,
  CommsSSSShared,
  ContentShared,
  EditorShared,
  ForumShared,
  GameApplicationShared,
  GameWebsiteShared,
  LogsShared,
  NotifierShared,
  RemoteConfigShared,
  UserManagementShared,
  WebsiteShared
} from "./apps";
import { CommonShared } from "./common";

export interface EnvironmentStaticShared extends ApplicationStatic<
  EnvironmentStatic<ContentShared>,
  EnvironmentStatic<EditorShared>,
  EnvironmentStatic<ForumShared>,
  EnvironmentStatic<GameApplicationShared>,
  EnvironmentStatic<GameWebsiteShared>,
  EnvironmentStatic<LogsShared>,
  EnvironmentStatic<UserManagementShared>,
  EnvironmentStatic<WebsiteShared>,
  EnvironmentStatic<NotifierShared>,
  EnvironmentStatic<RemoteConfigShared>,
  EnvironmentStatic<CommsESSShared>,
  EnvironmentStatic<CommsNPSShared>,
  EnvironmentStatic<CommsPSSShared>,
  EnvironmentStatic<CommsSSSShared>
> {
  common: EnvironmentStatic<CommonShared>
}
