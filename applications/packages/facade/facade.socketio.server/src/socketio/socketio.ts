import { Server as HTTPServer } from "http";

import { Server } from "socket.io";

import { EVT_CONNECTION, EVT_DISCONNECT } from "./socketio.const";
import { Socket } from "./socketio.model";
import {
    OnConnectionCallback,
    OnDisconnectCallback,
    OnEventCallback
} from "./socketio.type";

export class SocketIOFacade {

    private readonly _server = new Server(
        this._app,
        {
            path: this._path
        }
    );

    constructor(
        private readonly _app: HTTPServer,
        private readonly _path: string,
        private readonly _connectionCallback: OnConnectionCallback,
        private readonly _disconnectCallback: OnDisconnectCallback
    ) {
        this._server.on(EVT_CONNECTION, (socket: Socket) => {
            this._connectionCallback(
                (message) => socket.broadcast.emit(message)
            );
        });
        this._server.on(EVT_DISCONNECT, (socket: Socket) => {
            this._disconnectCallback(
                (message) => socket.broadcast.emit(message)
            );
        });
    }

    public addListener(
        topic: string,
        callback: OnEventCallback
    ): void {
        this._server.on(topic, (message: string) => {
            callback(message)
        });
    }

    public broadcastToAll(
        topic: string,
        message: string
    ): void {
        this._server.emit(topic, message);
    }

    public close(): void {
        this._server.removeAllListeners();
        this._server.close();
    }

}
