import { Server } from "http";

import { MessagebusService } from "@wraithlight/core.messagebus";
import { RealtimeMessage } from "@wraithlight/core.realtime.types";
import { SocketIOFacade } from "@wraithlight/facade.socketio.server";

import {
    ON_CLIENT_CONNECTING_TOKEN,
    ON_CLIENT_DISCONNECTING_TOKEN
} from "./realtime.const";
import { AsyncRealtimeMessage } from "./realtime.model";

export class RealtimeProvider {

    private readonly _socketIoFacade: SocketIOFacade;
    private readonly _messageBusService = new MessagebusService();

    constructor(
        server: Server,
        path: string,
    ) {
        this._socketIoFacade = new SocketIOFacade(
            server,
            path,
            (m) => this.onConnect(m),
            (m) => this.onDisconnect(m),
            (m, o, x) => this.onEvent(m, o, x)
        );
    }

    public getMessageBus(): MessagebusService {
        return this._messageBusService;
    }

    public sendToAll<T>(
        topic: string,
        message: T
    ): void {
        const messageLike: RealtimeMessage<T> = {
            payload: message
        };
        this._socketIoFacade.broadcastToAll(topic, JSON.stringify(messageLike));
    }

    public sendTo<T>(
        id: string,
        topic: string,
        message: T
    ): void {
        const messageLike: RealtimeMessage<T> = {
            payload: message
        };
        this._socketIoFacade.send(id, topic, JSON.stringify(messageLike))
    }

    public close(): void {
        this._socketIoFacade.close();
    }

    private onEvent(
        topic: string,
        id: string,
        payload: string
    ): void {
        this._messageBusService.push<AsyncRealtimeMessage>(topic, {
            id: id,
            message: JSON.parse(payload)
        });
    }

    private onConnect(
        id: string
    ): void {
        this._messageBusService.push(ON_CLIENT_CONNECTING_TOKEN, id);
    }

    private onDisconnect(
        id: string
    ): void {
        this._messageBusService.push(ON_CLIENT_DISCONNECTING_TOKEN, id);
    }

}
