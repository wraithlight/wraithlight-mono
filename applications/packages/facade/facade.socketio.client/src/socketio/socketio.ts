import {
    Socket,
    connect,
} from "socket.io-client";

import { SocketIOClientCallback } from "./socketio.type";

export class SocketIOFacade {

    private readonly _socket: Socket;

    constructor(
        url: string,
        autoConnect = true
    ) {
        this._socket = connect(
            url,
            {
                autoConnect: autoConnect
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

}
