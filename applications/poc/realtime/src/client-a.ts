process.env.DEBUG = "true";

import { RealtimeService } from "@wraithlight/common.realtime.sdk-client";

import { RT_PATH, SERVER_PORT, TOPIC_A, TOPIC_B, TOPIC_CONNECTED, TOPIC_DISCONNECTED } from "./shared";

async function run() {
    await new Promise((resolve) => setTimeout(() => resolve(true), 2_000));
    const url = `http://localhost:${SERVER_PORT}`;
    const service = new RealtimeService(url, RT_PATH);
    service.connectSync();
    service.on("connect", () => {
        console.log("CONNECTED SYNC!");
        service.send(TOPIC_A, "A-A");
        service.send(TOPIC_B, "A-B");

        service.on(TOPIC_A, (m) => {
            console.log(TOPIC_A, m);
        });
        service.on(TOPIC_B, (m) => {
            console.log(TOPIC_B, m);
        });

        new Promise(() => setTimeout(() => service.disconnect(), 2_000));
    });
    service.on(TOPIC_CONNECTED, (m) => {
        console.log(TOPIC_CONNECTED, m);
    });
    service.on(TOPIC_DISCONNECTED, (m) => {
        console.log(TOPIC_CONNECTED, m);
    });
}

run();
