import { join } from "path";

import { ServerLogsConfigReader } from "@wraithlight/common.environment-static.server";
import { SharedLogsConfigReader } from "@wraithlight/common.environment-static.shared";
import { HealthCheckControllerV1 } from "@wraithlight/common.health-checker.sdk-server";
import { LoggerService } from "@wraithlight/common.logger.sdk";
import { PackageJsonReader } from "@wraithlight/common.package-info.sdk-server";
import { ApplicationName } from "@wraithlight/core.auth.constant";
import { CoreEnvironment } from "@wraithlight/core.env.sdk";
import { createNodeServer } from "@wraithlight/core.server";

import { LogsEntryController } from "./controller";

LoggerService.initialize({
  applicationName: ApplicationName.Logs
});

const serverCfg = ServerLogsConfigReader
  .getInstance(CoreEnvironment.getEnvironmentType())
  ;

const sharedCfg = SharedLogsConfigReader
  .getInstance(CoreEnvironment.getEnvironmentType())
  ;

const packageInfoReader = new PackageJsonReader(
  join(__dirname, serverCfg.getCommon(m => m.files.packageJson.path)),
  LoggerService.getInstance(),
  ApplicationName.Logs,
  "0.0.1"   // TODO: From domain constants.
);

const CONTROLLERS = [
  new LogsEntryController(),
  new HealthCheckControllerV1(
    ApplicationName.Logs,
    packageInfoReader.getPackageJsonInfo().version
  )
];

createNodeServer(
  ApplicationName.Logs,
  CONTROLLERS,
  [],
  sharedCfg.get(x => x.server.port),
);
