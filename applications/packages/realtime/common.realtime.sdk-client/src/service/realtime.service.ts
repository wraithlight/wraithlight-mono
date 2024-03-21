import { RealtimeMessage, RtAuthType } from "@wraithlight/core.realtime.types";
import { SocketIOFacade } from "@wraithlight/facade.socketio.client";
import { isNil } from "@wraithlight/core.nullable";
import {
    RT_AUTH_HEADER_NAME, RT_AUTH_QUERYPARAM_NAME
} from "@wraithlight/core.realtime.constants";

export class RealtimeService {

    private readonly _realtimeFacade: SocketIOFacade;

    constructor(
        baseUrl: string,
        path: string,
        authType?: RtAuthType,
        authToken?: string
    ) {
        if (isNil(authType)) {
            this._realtimeFacade = new SocketIOFacade(
                baseUrl,
                path,
                false,
            );
            return;
        }

        switch (authType) {
            case RtAuthType.Header: {
                this._realtimeFacade = new SocketIOFacade(
                    baseUrl,
                    path,
                    false,
                    RT_AUTH_HEADER_NAME,
                    authToken ?? ""
                );
                break;
            }
            case RtAuthType.QueryParam: {
                this._realtimeFacade = new SocketIOFacade(
                    `${baseUrl}?${RT_AUTH_QUERYPARAM_NAME}=${authToken}`,
                    path,
                    false,
                );
                break;
            }
            default: {
                throw `E_RT_CLIENT_INIT_FAILED`
            }
        }
    }

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
