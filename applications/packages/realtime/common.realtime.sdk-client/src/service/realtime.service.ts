import { RealtimeMessage } from "@wraithlight/core.realtime.types";
import { SocketIOFacade } from "@wraithlight/facade.socketio.client";

export class RealtimeService {

    private readonly _realtimeFacade = new SocketIOFacade(
        this._baseUrl,
        this._path,
        false
    );

    constructor(
        private readonly _baseUrl: string,
        private readonly _path: string
    ) { }

    public connectAsync(
        onConnectedCallback: () => void
    ): void {
        if (this._realtimeFacade.isConnected()) {
            return;
        }
        this._realtimeFacade.connect();
        this._realtimeFacade.onMessage("connect", () => onConnectedCallback());
    }

    public async connectSync(): Promise<void> {
        if (!this._realtimeFacade.isConnected()) {
            return new Promise((resolve) => {
                this._realtimeFacade.connect();
                this._realtimeFacade.onMessage("connect", () => resolve(undefined));
            });
        }
        return Promise.resolve(undefined);
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
                const objLike: RealtimeMessage<T> = message
                    ? JSON.parse(message)
                    : ""
                ;
                callbackFn(objLike);
            }
        );
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
