import "./controller";
import {
  ServerUserManagementConfigReader
} from "@wraithlight/common.environment-static.server";
import {
  SharedUserManagementConfigReader
} from "@wraithlight/common.environment-static.shared";
import {
  initializeDal
} from "@wraithlight/common.user-management.dal";
import { CoreEnvironment } from "@wraithlight/core.env.sdk";
import {
  initServer,
  JsonObject,
  serveSwaggerFile,
  startServer
} from "@wraithlight/core.node.evo";
import { FileOperator } from "@wraithlight/framework.io";
import { join } from "path";

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

const isSwadocEnabled = serverReader.getCommon(m => m.features.swagger.isEnabled);
if (isSwadocEnabled) {
  const swadocFilePath = serverReader.getCommon(m => m.files.swagger.path);
  const swadocPath = join(__dirname, swadocFilePath);
  const swadocResult = FileOperator.readFileJson<JsonObject>(swadocPath);
  if (swadocResult.isErrorTC()) {
    throw `Cannot read swadoc file!`;
  }
  serveSwaggerFile(
    serverReader.getCommon(m => m.paths.swagger),
    swadocResult.payload
  );
}

initServer({
  enableCors: true,
  maxPayloadSizeMB: 2
});
startServer(sharedReader.get(m => m.server.port));
