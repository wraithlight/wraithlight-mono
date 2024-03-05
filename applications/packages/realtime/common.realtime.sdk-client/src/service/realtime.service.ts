import { RealtimeMessage } from "@wraithlight/core.realtime.types";
import { SocketIOFacade } from "@wraithlight/facade.socketio.client";

export class RealtimeService {

    private readonly _realtimeFacade = new SocketIOFacade(this._url, false);

    constructor(
        private readonly _url: string
    ) { }

    public connect(): void {
        if (!this._realtimeFacade.isConnected()) {
            this._realtimeFacade.connect();
        }
    }

    public disconnect(): void {
        if (this._realtimeFacade.isConnected()) {
            this._realtimeFacade.disconnect();
        }
    }

    public on<T>(
        topic: string,
        callbackFn: (message: RealtimeMessage<T>) => void
    ): void {
        this._realtimeFacade.onMessage(
            topic,
            (message) => {
                const objLike: RealtimeMessage<T> = JSON.parse(message);
                callbackFn(objLike);
            }
        )
    }

    public send<T>(
        topic: string,
        message: T
    ): void {
        const messageLike: RealtimeMessage<T> = {
            payload: message
        };
        this._realtimeFacade.send(topic, JSON.stringify(messageLike));
    }

}
