import { Server as HTTPServer } from "http";

import { Server } from "socket.io";

import { EVT_CONNECTION, EVT_DISCONNECT } from "./socketio.const";
import { Socket, SocketGuard } from "./socketio.model";
import {
  OnConnectCallback,
  OnDisconnectCallback,
  OnEventCallback
} from "./socketio.type";

export class SocketIOFacade {

  private readonly _server: Server;

  constructor(
    readonly app: HTTPServer,
    readonly path: string,
    private readonly _connectCallback: OnConnectCallback,
    private readonly _disconnectCallback: OnDisconnectCallback,
    private readonly _onMessageCallback: OnEventCallback,
    guards?: ReadonlyArray<SocketGuard>
  ) {
    this._server = new Server(
      app,
      {
        path: path
      },
    );
    guards?.forEach(m => this._server.use(
      (socket, next) => m(
        socket.request,
        next
      )
    )
    );
    this._server.on(
      EVT_CONNECTION,
      (socket: Socket) => {
        socket.onAny((m, o) => this._onMessageCallback(
          m,
          socket.id,
          o
        ));
        this._connectCallback(socket.id);
        socket.on(
          EVT_DISCONNECT,
          () => {
            this._disconnectCallback(socket.id);
          }
        );
      });
  }

  public broadcastToAll(
    topic: string,
    message: string
  ): void {
    this._server.emit(
      topic,
      message
    );
  }

  public send(
    id: string,
    topic: string,
    message: string
  ): void {
    this._server.sockets.to(id).emit(
      topic,
      message
    );
  }

  public close(): void {
    this._server.removeAllListeners();
    this._server.close();
  }

}
