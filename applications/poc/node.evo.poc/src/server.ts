import { EventBus, initServer, startServer } from "@wraithlight/core.node.evo";

import {
  setHcHealthTokens,
  setHcMetricsTokens,
  setAppinfo,
  HealthCheckControllerV2
} from "@wraithlight/common.health-checker.sdk-server";
import "./controller";

EventBus.onServerStart((payload) => console.log(payload));
EventBus.onRequestStart((payload) => console.log(payload));
EventBus.onProcessFatal((payload) => {
  JSON.stringify(
    payload,
    Object.getOwnPropertyNames(
      payload
    )
  )
});

setHcHealthTokens(["test"]);
setHcMetricsTokens(["test"]);
setAppinfo(
  "@wraithlight-poc/node.evo",
  "1.0.0"
);

initServer({
  enableCors: true,
  maxPayloadSizeMB: 2
});
const { stopSignal } = startServer(4000);

// setTimeout(() => {
//   stopSignal();
// }, 5_000);
