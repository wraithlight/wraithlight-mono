import { ApplicationName } from "@wraithlight/core.auth.constant";
import { createNodeServer } from "@wraithlight/core.server";
import {
    AsyncRealtimeMessage,
    ON_CLIENT_CONNECTING_TOKEN,
    ON_CLIENT_DISCONNECTING_TOKEN,
    RTHeaderGuard,
    RealtimeProviderFactory
} from "@wraithlight/common.realtime.sdk-server";
import { HealthCheckControllerV1 } from "@wraithlight/common.health-checker.sdk-server";

import { RT_PATH, SERVER_PORT, TOPIC_A, TOPIC_B, TOPIC_CONNECTED, TOPIC_DISCONNECTED } from "./shared";

function run() {
    const rtFactory = new RealtimeProviderFactory();

    createNodeServer(
        "Realtime POC Server" as ApplicationName,
        [new HealthCheckControllerV1("rt-poc", "1.0.0")],           // TODO: Remove this.
        [(server) => rtFactory.createInstance(
            server,
            RT_PATH,
            [
                RTHeaderGuard(["token-1"])
            ]
        )],
        SERVER_PORT,
        undefined
    );

    const rtProvider = rtFactory.getInstance()
    const mBus = rtProvider.getMessageBus();
    mBus.sub(ON_CLIENT_CONNECTING_TOKEN, (id: string) => {
        rtProvider.sendToAll(TOPIC_CONNECTED, id);
        console.log(`Client connected: '${id}'`);
    });
    mBus.sub(ON_CLIENT_DISCONNECTING_TOKEN, (id: string) => {
        rtProvider.sendToAll(TOPIC_DISCONNECTED, id);
        console.log(`Client disconnected: '${id}'`);
    });
    mBus.sub(TOPIC_A, (m: AsyncRealtimeMessage) => {
        rtProvider.sendTo(m.id, TOPIC_A, `REPLY:: ${m.message.payload}`);
        console.log(`(${TOPIC_A}) '${m.id}' says: ${JSON.stringify(m.message)}`);
    });
    mBus.sub(TOPIC_B, (m: AsyncRealtimeMessage) => {
        rtProvider.sendToAll(TOPIC_B, m.message.payload);
        console.log(`(${TOPIC_B}) '${m.id}' says: ${JSON.stringify(m.message)}`);
    });
}


run()