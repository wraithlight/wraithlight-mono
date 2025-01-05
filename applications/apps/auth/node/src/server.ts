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
  startServer
} from "@wraithlight/core.node.evo";

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

initServer({
  enableCors: true,
  maxPayloadSizeMB: 2
});
startServer(sharedReader.get(m => m.server.port));
