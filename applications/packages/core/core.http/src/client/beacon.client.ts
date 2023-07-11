import { getNavigatorRef } from "@wraithlight/core.dom";

export class HttpBeaconClient {

    private readonly _navigator = getNavigatorRef();

    public beacon<T>(url: string, data?: T): boolean {
        return this._navigator.sendBeacon(url, JSON.stringify(data));
    }

}
