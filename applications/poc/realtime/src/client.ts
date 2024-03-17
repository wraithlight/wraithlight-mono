process.env.DEBUG = "true";

import { RealtimeService } from "@wraithlight/common.realtime.sdk-client";

import { RT_PATH, SERVER_PORT, TOPIC_A } from "./shared";

async function run() {
    await new Promise((resolve) => setTimeout(() => resolve(true), 5_000))
    const url = `http://localhost:${SERVER_PORT}`;
    console.log(url)
    const service = new RealtimeService(url, RT_PATH);
    service.connect();
    service.on("connect", () => {
        console.log("c")
    });
    await new Promise((resolve) => setTimeout(() => resolve(true), 5_000))
    service.send(TOPIC_A, "['szia']");
}

run();
