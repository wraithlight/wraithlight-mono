export type OnConnectCallback = (id: string) => void;
export type OnDisconnectCallback = (id: string) => void;
export type OnEventCallback = (topic: string, id: string, message: string) => void;
