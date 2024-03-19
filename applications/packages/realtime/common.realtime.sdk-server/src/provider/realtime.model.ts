import { IncomingMessage } from "http";

import { RealtimeMessage } from "@wraithlight/core.realtime.types";

export interface AsyncRealtimeMessage<T = unknown> {
    id: string;
    message: RealtimeMessage<T>;
}


type InternalNextFunction = (error?: Error) => void;

export type SocketGuard = (request: IncomingMessage, next: InternalNextFunction) => void;