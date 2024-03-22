import { IncomingMessage } from "http";

export interface Socket {
    id: string;
    on(topic: string, handler: (message: string) => void): void;
    onAny(handler: (topic: string, message: string) => void): void;
}

type InternalNextFunction = (error?: Error) => void;

export type SocketGuard = (
    request: IncomingMessage,
    next: InternalNextFunction
) => void;
