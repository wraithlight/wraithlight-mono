import { Guid } from "@wraithlight/core.guid";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface MessagebusListener<T = any> {
  id: Guid;
  token: string;
  callback: MessagebusCallbackFn<T>
}

export type MessagebusCallbackFn<T> = (data: T) => void;
