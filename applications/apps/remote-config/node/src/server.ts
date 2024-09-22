import { join } from "path";

import { ServerRemoteConfigConfigReader } from "@wraithlight/common.environment-static.server";
import { SharedRemoteConfigConfigReader } from "@wraithlight/common.environment-static.shared";
import { HealthCheckControllerV1 } from "@wraithlight/common.health-checker.sdk-server";
import { LoggerService } from "@wraithlight/common.logger.sdk";
import { PackageJsonReader } from "@wraithlight/common.package-info.sdk-server";
import { ApplicationName } from "@wraithlight/core.auth.constant";
import { CoreEnvironment } from "@wraithlight/core.env.sdk";
import { BaseController } from "@wraithlight/core.node";
import { createNodeServer } from "@wraithlight/core.server";

LoggerService.initialize({
    applicationName: ApplicationName.RemoteConfig
});

const serverCfg = ServerRemoteConfigConfigReader
  .getInstance(CoreEnvironment.getEnvironmentType())
;

const sharedCfg = SharedRemoteConfigConfigReader
    .getInstance(CoreEnvironment.getEnvironmentType())
;

const packageInfoReader = new PackageJsonReader(
  join(__dirname, serverCfg.getCommon(m => m.files.packageJson.path)),
  LoggerService.getInstance(),
  ApplicationName.RemoteConfig,
  "0.0.1"   // TODO: From domain constants.
);

const CONTROLLERS: ReadonlyArray<BaseController> = [
    new HealthCheckControllerV1(
        ApplicationName.RemoteConfig,
        packageInfoReader.getPackageJsonInfo().version
    )
];

createNodeServer(
    ApplicationName.RemoteConfig,
    CONTROLLERS,
    [],
    sharedCfg.get(x => x.server.port),
);
