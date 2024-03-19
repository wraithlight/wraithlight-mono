## facade.socketio.client

```ts

import { SocketIOFacade } from "@wraithlight/facade.socketio.client";

const url = "http://wraithlightgame.ai/api/v1/realtime";
const facade = new SocketIOFacade(url);

if (!facade.isConnected()) {
    facade.connect();
}

facade.onMessage("my-topic", (message) => console.log(message));

```
