import { join } from "path";

import { ServerGameWebsiteConfigReader } from "@wraithlight/common.environment-static.server";
import { SharedGameWebsiteConfigReader } from "@wraithlight/common.environment-static.shared";
import { HealthCheckControllerV1 } from "@wraithlight/common.health-checker.sdk-server";
import { LoggerService } from "@wraithlight/common.logger.sdk";
import { PackageJsonReader } from "@wraithlight/common.package-info.sdk-server";
import { ApplicationName } from "@wraithlight/core.auth.constant";
import { CoreEnvironment } from "@wraithlight/core.env.sdk";
import { BaseController } from "@wraithlight/core.node";
import { createNodeServer } from "@wraithlight/core.server";

LoggerService.initialize({
  applicationName: ApplicationName.GameWebsite
});

const serverCfg = ServerGameWebsiteConfigReader
  .getInstance(CoreEnvironment.getEnvironmentType())
  ;

const sharedCfg = SharedGameWebsiteConfigReader
  .getInstance(CoreEnvironment.getEnvironmentType())
  ;

const packageInfoReader = new PackageJsonReader(
  join(__dirname, serverCfg.getCommon(m => m.files.packageJson.path)),
  LoggerService.getInstance(),
  ApplicationName.GameWebsite,
  "0.0.1"   // TODO: From domain constants.
);

const CONTROLLERS: Array<BaseController> = [
  new HealthCheckControllerV1(
    ApplicationName.GameWebsite,
    packageInfoReader.getPackageJsonInfo().version
  )
];

const frontendPath = serverCfg.getCommon(x => x.files.frontend.static);

createNodeServer(
  ApplicationName.GameWebsite,
  CONTROLLERS,
  [],
  sharedCfg.get(x => x.server.port),
  [
    {
      path: serverCfg.getCommon(x => x.paths.base),
      staticPath: join(
        __dirname,
        frontendPath
      )
    },
    {
      path: serverCfg.getCommon(x => x.paths.wildcard),
      staticPath: join(
        __dirname,
        frontendPath
      )
    }
  ]
);
