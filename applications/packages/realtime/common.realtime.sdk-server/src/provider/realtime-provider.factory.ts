import { Server } from "http";

import { InvalidArgumentError } from "@wraithlight/core.errors";
import { Nullable, isNil } from "@wraithlight/core.nullable";

import { SocketGuard } from "./realtime.model";
import { RealtimeProvider } from "./realtime.provider";

export class RealtimeProviderFactory {

    private _instance: Nullable<RealtimeProvider>;

    public createInstance(
        server: Server,
        path: string,
        guards?: ReadonlyArray<SocketGuard>
    ): void {
        if (isNil(this._instance)) {
            this._instance = new RealtimeProvider(server, path, guards);
        }
    }

    public getInstance(): RealtimeProvider {
        if (isNil(this._instance)) {
            throw new InvalidArgumentError(`RealtimeProviderFactory::getInstance`);
        }
        return this._instance;
    }
}
