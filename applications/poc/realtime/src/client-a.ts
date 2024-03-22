process.env.DEBUG = "true";

import { RealtimeService } from "@wraithlight/common.realtime.sdk-client";
import { RtAuthType } from "@wraithlight/core.realtime.types";

import { RT_PATH, SERVER_PORT, TOPIC_A, TOPIC_B, TOPIC_CONNECTED, TOPIC_DISCONNECTED } from "./shared";

async function run(): Promise<void> {
    const timeout = 2_000;
    await new Promise((resolve) => setTimeout(() => resolve(true), timeout));
    const url = `http://localhost:${SERVER_PORT}`;
    const service = new RealtimeService(
        url,
        RT_PATH,
        RtAuthType.Header,
        "token-1"
    );
    service.connectSync();
    service.on("connect", () => {
        // eslint-disable-next-line no-console
        console.log("CONNECTED SYNC!");
        service.send(TOPIC_A, "A-A");
        service.send(TOPIC_B, "A-B");

        service.on(TOPIC_A, (m) => {
            // eslint-disable-next-line no-console
            console.log(TOPIC_A, m);
        });
        service.on(TOPIC_B, (m) => {
            // eslint-disable-next-line no-console
            console.log(TOPIC_B, m);
        });

        new Promise(() => setTimeout(() => service.disconnect(), timeout));
    });
    service.on(TOPIC_CONNECTED, (m) => {
        // eslint-disable-next-line no-console
        console.log(TOPIC_CONNECTED, m);
    });
    service.on(TOPIC_DISCONNECTED, (m) => {
        // eslint-disable-next-line no-console
        console.log(TOPIC_CONNECTED, m);
    });
}

run();
