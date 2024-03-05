import { createServer } from "http";

import { MessagebusService } from "@wraithlight/core.messagebus";
import { RealtimeMessage } from "@wraithlight/core.realtime.types";
import { SocketIOFacade } from "@wraithlight/facade.socketio.server";
import { Application } from "express";

import {
    ON_CLIENT_CONNECTING_TOKEN,
    ON_CLIENT_DISCONNECTING_TOKEN
} from "./realtime.const";
import {
    ClientEventCallback,
    EventListener
} from "./realtime.type";

export class RealtimeProvider {

    private readonly _socketIoFacade: SocketIOFacade;
    private readonly _messageBusService = new MessagebusService();

    constructor(
        app: Application,
        path: string
    ) {
        const server = createServer(app);
        this._socketIoFacade = new SocketIOFacade(
            server,
            path,
            (m) => this.onClientConnecting(m),
            (m) => this.onClientDisconnecting(m)
        );
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

    public close(): void {
        this._socketIoFacade.close();
    }

    public listenTo<T>(
        topic: string,
        listener: EventListener<T>
    ): void {
        this._socketIoFacade.addListener(
            topic,
            (message: string) => {
                const event: RealtimeMessage<T> = JSON.parse(message);
                listener(event);
            }
        )
    }

    private onClientConnecting(
        _onClientConnected: ClientEventCallback
    ): void {
        this._messageBusService.push(ON_CLIENT_CONNECTING_TOKEN);
    }

    private onClientDisconnecting(
        _onClientDisconnected: ClientEventCallback
    ): void {
        this._messageBusService.push(ON_CLIENT_DISCONNECTING_TOKEN);
    }

}
