import { join } from "path";

import { ServerAuthControllerV1 } from "@wraithlight/common.auth-sdk.server";
import { ServerUserManagementConfigReader } from "@wraithlight/common.environment-static.server";
import { SharedUserManagementConfigReader } from "@wraithlight/common.environment-static.shared";
import { HealthCheckControllerV1 } from "@wraithlight/common.health-checker.sdk-server";
import { LoggerService } from "@wraithlight/common.logger.sdk";
import { PackageJsonReader } from "@wraithlight/common.package-info.sdk-server";
import { ApplicationName } from "@wraithlight/core.auth.constant";
import { LoginScope } from "@wraithlight/core.auth.types";
import { CoreEnvironment } from "@wraithlight/core.env.sdk";
import { createNodeServer } from "@wraithlight/core.server";
import { DEFAULT_APPLICATION_VERSION } from "@wraithlight/domain.application-info.constants";

import {
  AccountControllerV2,
  SessionControllerV2,
  ExternalSessionV3Controller,
  ExternalUserV3Controller
} from "./controller";

LoggerService.initialize({
  applicationName: ApplicationName.UserManagement
});

const serverCfg = ServerUserManagementConfigReader
  .getInstance(CoreEnvironment.getEnvironmentType())
  ;

const sharedCfg = SharedUserManagementConfigReader
  .getInstance(CoreEnvironment.getEnvironmentType())
  ;

const packageInfoReader = new PackageJsonReader(
  join(__dirname, serverCfg.getCommon(m => m.files.packageJson.path)),
  LoggerService.getInstance(),
  ApplicationName.UserManagement,
  DEFAULT_APPLICATION_VERSION
);

const CONTROLLERS = [
  new ServerAuthControllerV1(LoginScope.UserManagement),
  new AccountControllerV2(),
  new SessionControllerV2(),
  new HealthCheckControllerV1(
    ApplicationName.UserManagement,
    packageInfoReader.getPackageJsonInfo().version
  ),
  new ExternalSessionV3Controller(),
  new ExternalUserV3Controller()
];

createNodeServer(
  ApplicationName.UserManagement,
  CONTROLLERS,
  [],
  sharedCfg.get(x => x.server.port),
  getStaticFiles(),
  getSwaggerFiles()
);

function getStaticFiles(): Array<{ path: string, staticPath: string}> {
  const result = [
    ...getFeStaticFiles(serverCfg.getCommon(x => x.files.frontend.static))
  ];
  return result;
}

function getSwaggerFiles(): Array<{ path: string, staticPath: string}> {
  const result = [
    ...getSwaggerStaticFiles(serverCfg.getCommon(x => x.files.swaggerJson.path))
  ];
  return result;
}

function getFeStaticFiles(
  frontendPath: string
): Array<{ path: string, staticPath: string}> {
  const paths = [
    serverCfg.getCommon(x => x.paths.base),
    serverCfg.getCommon(x => x.paths.wildcard)
  ].map(m => createStaticFilePath(m, frontendPath));
  return paths;
}

function getSwaggerStaticFiles(
  swaggerPath: string
): Array<{ path: string, staticPath: string}> {
  const paths = [
    serverCfg.getCommon(x => x.paths.swagger)
  ].map(m => createStaticFilePath(m, swaggerPath));
  return paths;
}

function createStaticFilePath(
  path: string,
  staticPath: string
): { path: string, staticPath: string } {
  const result =     {
    path: path,
    staticPath: join(
      __dirname,
      staticPath
    )
  };
  return result;
}