import { Guid, newGuid } from "@wraithlight/core.guid";

import { MessagebusCallbackFn, MessagebusListener } from "./messagebus.model";

export class MessagebusService {

  private readonly _listeners: Array<MessagebusListener> = [];

  public removeListener(id: Guid): void {
    const index = this._listeners.findIndex(m => m.id === id);
    if (index > -1) {
      this._listeners.splice(
        index,
        1
      );
    }
  }

  public push<T>(token: string, data?: T): void {
    this._listeners
      .filter(m => m.token === token)
      .forEach(m => m.callback(data))
    ;
  }

  public sub<T>(token: string, callback: MessagebusCallbackFn<T>): Guid {
    const id = newGuid();
    this._listeners.push({
      id: id,
      token: token,
      callback: callback
    });
    return id;
  }

}
