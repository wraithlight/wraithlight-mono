process.env.DEBUG = "true";

import { RealtimeService } from "@wraithlight/common.realtime.sdk-client";

import { RT_PATH, SERVER_PORT, TOPIC_A, TOPIC_B, TOPIC_CONNECTED, TOPIC_DISCONNECTED } from "./shared";

async function run() {
    await new Promise((resolve) => setTimeout(() => resolve(true), 2_000))
    const url = `http://localhost:${SERVER_PORT}`;
    const service = new RealtimeService(url, RT_PATH);
    service.connectAsync(() => console.log("CONNECTED ASYNC!"));
    service.on("connect", () => {
        service.send(TOPIC_A, "B-A");
        service.send(TOPIC_B, "B-B");
    });
    service.on(TOPIC_CONNECTED, (m) => {
        console.log(TOPIC_CONNECTED, m);
    });
    service.on(TOPIC_DISCONNECTED, (m) => {
        console.log(TOPIC_DISCONNECTED, m);
    });
    service.on(TOPIC_A, (m) => {
        console.log(TOPIC_A, m);
    });
    service.on(TOPIC_B, (m) => {
        console.log(TOPIC_B, m);
    });
}

run();
