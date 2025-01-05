import { join } from "path";

import {
  ServerUserManagementConfigReader
} from "@wraithlight/common.environment-static.server";
import {
  SharedUserManagementConfigReader
} from "@wraithlight/common.environment-static.shared";
import {
  HealthCheckControllerV2,
  setAppinfo,
  setHcHealthTokens,
  setHcMetricsTokens
} from "@wraithlight/common.health-checker.sdk-server";
import {
  PackageJsonReader
} from "@wraithlight/common.package-info.sdk-server";
import {
  initializeDal
} from "@wraithlight/common.user-management.dal";
import { CoreEnvironment } from "@wraithlight/core.env.sdk";
import {
  controllerBlocker,
  initServer,
  startServer
} from "@wraithlight/core.node.evo";
import {
  ApplicationName,
  DEFAULT_APPLICATION_VERSION
} from "@wraithlight/domain.application-info.constants";

import "./controller";

controllerBlocker(
  HealthCheckControllerV2
);

const sharedReader = SharedUserManagementConfigReader
  .getInstance(CoreEnvironment.getEnvironmentType())
;
const serverReader = ServerUserManagementConfigReader
  .getInstance(CoreEnvironment.getEnvironmentType())
;

initializeDal(
  serverReader.get(m => m.database.host),
  serverReader.get(m => m.database.port),
  serverReader.get(m => m.database.username),
  serverReader.get(m => m.database.password),
  serverReader.get(m => m.database.database),
  true
);

const packageJsonPath = serverReader.getCommon(m => m.files.packageJson.path);
const packageJsonReader = new PackageJsonReader(
  join(__dirname, packageJsonPath),
  console, // TODO: Remove this.
  ApplicationName.UserManagement,
  DEFAULT_APPLICATION_VERSION
);

setAppinfo(
  packageJsonReader.getPackageJsonInfo().name,
  packageJsonReader.getPackageJsonInfo().version,
);
setHcHealthTokens(serverReader.get(m => m.apiTokensNamed.healtcheck));
setHcMetricsTokens(serverReader.get(m => m.apiTokensNamed.metrics));

initServer({
  enableCors: true,
  maxPayloadSizeMB: 2
});
startServer(sharedReader.get(m => m.server.port));
