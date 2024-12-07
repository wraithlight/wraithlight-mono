import { EventBus, initServer, startServer } from "@wraithlight/core.node.evo";

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

initServer({
  enableCors: true,
  maxPayloadSizeMB: 2
});
const { stopSignal } = startServer(4000);

// setTimeout(() => {
//   stopSignal();
// }, 5_000);
