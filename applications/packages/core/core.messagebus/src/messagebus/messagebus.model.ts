import { Guid } from "@wraithlight/core.types";

export interface MessagebusListener<T = any> {
    id: Guid;
    token: string;
    callback: MessagebusCallbackFn<T>
}

export interface MessagebusCallbackFn<T> {
    (data: T): void
}
