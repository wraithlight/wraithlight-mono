type OnConnectedCallback = (message: string) => void;
type OnDisconnectedCallback = (message: string) => void;

export type Emitter = (message: string) => void;

export type OnConnectionCallback = (callback: OnConnectedCallback) => void;
export type OnDisconnectCallback = (callback: OnDisconnectedCallback) => void;
export type OnEventCallback = Emitter;
