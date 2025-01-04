import "./controller";
import {
  initServer,
  startServer,
  EventBus
} from "@wraithlight/core.node.evo";
import {
  SharedUserManagementConfigReader
} from "@wraithlight/common.environment-static.shared";
import {
  ServerUserManagementConfigReader
} from "@wraithlight/common.environment-static.server";
import { CoreEnvironment } from "@wraithlight/core.env.sdk";
import {
  initializeDal
} from "@wraithlight/common.user-management.dal";

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


EventBus.onRequestStart((m) => {
  console.log("on request", m.correlationId);
});

initServer({
  enableCors: true,
  maxPayloadSizeMB: 2
});
startServer(sharedReader.get(m => m.server.port));
