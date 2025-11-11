import { join } from "path";

import { ServerAuthControllerV1 } from "@wraithlight/common.auth-sdk.server";
import { ServerEditorConfigReader } from "@wraithlight/common.environment-static.server";
import { SharedEditorConfigReader } from "@wraithlight/common.environment-static.shared";
import { HealthCheckControllerV1 } from "@wraithlight/common.health-checker.sdk-server";
import { LoggerService } from "@wraithlight/common.logger.sdk";
import { PackageJsonReader } from "@wraithlight/common.package-info.sdk-server";
import { ApplicationName } from "@wraithlight/core.auth.constant";
import { LoginScope } from "@wraithlight/core.auth.types";
import { CoreEnvironment } from "@wraithlight/core.env.sdk";
import { createNodeServer } from "@wraithlight/core.server";

LoggerService.initialize({
  applicationName: ApplicationName.Editor
});

const serverCfg = ServerEditorConfigReader
  .getInstance(CoreEnvironment.getEnvironmentType())
  ;

const sharedCfg = SharedEditorConfigReader
  .getInstance(CoreEnvironment.getEnvironmentType())
  ;

const packageInfoReader = new PackageJsonReader(
  join(__dirname, serverCfg.getCommon(m => m.files.packageJson.path)),
  LoggerService.getInstance(),
  ApplicationName.Editor,
  "0.0.1"   // TODO: From domain constants.
);

const CONTROLLERS = [
  new ServerAuthControllerV1(LoginScope.Editor),
  new HealthCheckControllerV1(
    ApplicationName.Editor,
    packageInfoReader.getPackageJsonInfo().version
  )
];

createNodeServer(
  ApplicationName.Editor,
  CONTROLLERS,
  [],
  sharedCfg.get(x => x.server.port),
);
