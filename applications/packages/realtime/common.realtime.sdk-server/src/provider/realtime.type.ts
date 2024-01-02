import { RealtimeMessage } from "@wraithlight/core.realtime.types";

export type ClientEventCallback = (message: string) => void;
export type EventListener<T> = (object: RealtimeMessage<T>) => void;
