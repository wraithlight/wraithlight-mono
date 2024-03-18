import {
    Socket,
    connect,
} from "socket.io-client";

import { SocketIOClientCallback } from "./socketio.type";

export class SocketIOFacade {

    private readonly _socket: Socket;

    constructor(
        baseUrl: string,
        path: string,
        autoConnect = true
    ) {
        this._socket = connect(
            baseUrl,
            {
                autoConnect: autoConnect,
                path: path
            }
        );
    }

    public isConnected(): boolean {
        return this._socket.connected;
    }

    public connect(): void {
        this._socket.connect();
    }

    public disconnect(): void {
        this._socket?.disconnect();
    }

    public onMessage(
        topic: string,
        callback: SocketIOClientCallback
    ): SocketIOFacade {
        this._socket?.on(topic, (message) => callback(message));
        return this;
    }

    public send(
        topic: string,
        message: string
    ): void {
        this._socket.emit(topic, message);
    }

}
