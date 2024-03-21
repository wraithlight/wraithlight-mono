import { IncomingMessage } from "http";

import { RealtimeMessage } from "@wraithlight/core.realtime.types";

export interface AsyncRealtimeMessage<T = unknown> {
    id: string;
    message: RealtimeMessage<T>;
}


export type RTNextFunction = (error?: Error) => void;

export type SocketGuard = (
    request: IncomingMessage,
    next: RTNextFunction
) => void;