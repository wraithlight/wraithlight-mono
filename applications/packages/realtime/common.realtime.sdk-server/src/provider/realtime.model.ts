import { RealtimeMessage } from "@wraithlight/core.realtime.types";

export interface AsyncRealtimeMessage<T = unknown> {
    id: string;
    message: RealtimeMessage<T>;
}