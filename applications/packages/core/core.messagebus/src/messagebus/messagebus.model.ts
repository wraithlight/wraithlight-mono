import { Guid } from "@wraithlight/core.guid";

export interface MessagebusListener<T = any> {
    id: Guid;
    token: string;
    callback: MessagebusCallbackFn<T>
}

export type MessagebusCallbackFn<T>  = (data?: T) => void;
