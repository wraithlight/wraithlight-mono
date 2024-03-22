import { HealthCheckControllerV1 } from "@wraithlight/common.health-checker.sdk-server";
import {
    AsyncRealtimeMessage,
    ON_CLIENT_CONNECTING_TOKEN,
    ON_CLIENT_DISCONNECTING_TOKEN,
    RTHeaderGuard,
    RealtimeProviderFactory
} from "@wraithlight/common.realtime.sdk-server";
import { ApplicationName } from "@wraithlight/core.auth.constant";
import { createNodeServer } from "@wraithlight/core.server";

import { RT_PATH, SERVER_PORT, TOPIC_A, TOPIC_B, TOPIC_CONNECTED, TOPIC_DISCONNECTED } from "./shared";

function run(): void {
    const rtFactory = new RealtimeProviderFactory();

    createNodeServer(
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        "Realtime POC Server" as ApplicationName,
        [new HealthCheckControllerV1("rt-poc", "1.0.0")],           // TODO: Remove this.
        [(server): unknown => rtFactory.createInstance(
            server,
            RT_PATH,
            [
                RTHeaderGuard(["token-1"])
            ]
        )],
        SERVER_PORT,
        undefined
    );

    const rtProvider = rtFactory.getInstance();
    const mBus = rtProvider.getMessageBus();
    mBus.sub(ON_CLIENT_CONNECTING_TOKEN, (id: string) => {
        rtProvider.sendToAll(TOPIC_CONNECTED, id);
        // eslint-disable-next-line no-console
        console.log(`Client connected: '${id}'`);
    });
    mBus.sub(ON_CLIENT_DISCONNECTING_TOKEN, (id: string) => {
        rtProvider.sendToAll(TOPIC_DISCONNECTED, id);
        // eslint-disable-next-line no-console
        console.log(`Client disconnected: '${id}'`);
    });
    mBus.sub(TOPIC_A, (m: AsyncRealtimeMessage) => {
        rtProvider.sendTo(m.id, TOPIC_A, `REPLY:: ${m.message.payload}`);
        // eslint-disable-next-line no-console
        console.log(`(${TOPIC_A}) '${m.id}' says: ${JSON.stringify(m.message)}`);
    });
    mBus.sub(TOPIC_B, (m: AsyncRealtimeMessage) => {
        rtProvider.sendToAll(TOPIC_B, m.message.payload);
        // eslint-disable-next-line no-console
        console.log(`(${TOPIC_B}) '${m.id}' says: ${JSON.stringify(m.message)}`);
    });
}


run();