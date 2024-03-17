import { ApplicationName } from "@wraithlight/core.common-constants";
import { createNodeServer } from "@wraithlight/core.server";
import { ON_CLIENT_CONNECTING_TOKEN, RealtimeProvider } from "@wraithlight/common.realtime.sdk-server";
import { HealthCheckControllerV1 } from "@wraithlight/common.health-checker.sdk-server";

import { RT_PATH, SERVER_PORT, TOPIC_A } from "./shared";
import { createServer } from "http";
import { Server } from "socket.io";


function run() {
    const app = createNodeServer(
        "Realtime POC Server" as ApplicationName,
        [new HealthCheckControllerV1("alma")],
        SERVER_PORT,
        undefined,
        false
    )
    // const http = createServer(app.getApp())
    // const io = new Server(
    //     http,
    // {
    //     path: RT_PATH,
    // });
    // io.listen(9800);
    // io.addListener(TOPIC_A, (m) => console.log(m))

    const server = app.getApp();
    const rt = new RealtimeProvider(app.getApp(), RT_PATH);
    rt._messageBusService.sub(ON_CLIENT_CONNECTING_TOKEN, (d) => console.log(d));
    rt.listenTo(TOPIC_A, (message) => {
        console.log(`${TOPIC_A} > ${message}`);
    });
}

run()