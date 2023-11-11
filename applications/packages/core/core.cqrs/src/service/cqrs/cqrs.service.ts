import { FifoStackService } from "@wraithlight/core.stack";
import { isNil } from "@wraithlight/core.types";
import { Guid, newGuid } from "@wraithlight/core.guid";

import { CQRS_PROCESSOR_TIMEOUT } from "./cqrs.const";
import { CqrsContentModel, CqrsProcessor } from "./cqrs.model";

export class CqrsService<T> {

    private _isRunning = false;
    private readonly _fifoService = new FifoStackService<CqrsContentModel<T>>();

    constructor(
        private readonly _processor: CqrsProcessor<T>,
        private readonly _processorTimeout = CQRS_PROCESSOR_TIMEOUT
    ) {
        this.processor();
    }

    public addItem(item: T): Guid {
        const id = newGuid();
        const stackItem: CqrsContentModel<T> = {
            id,
            data: item
        };
        this._fifoService.set(stackItem);
        this._isRunning = true;
        return id;
    }

    public isRunning(): boolean {
        return this._isRunning;
    }

    public start(): void {
        this._isRunning = true;
    }

    public stop(): void {
        this._isRunning = false;
    }

    public clear(): void {
        this._isRunning = false;
        this._fifoService.clear();
    }

    private processor(): void {
        setInterval(() => {
            if (!this._isRunning) {
                return;
            }
            const item = this._fifoService.tryGetNext();
            if (isNil(item)) {
                return;
            }
            // TODO: Remove forced cast once https://github.com/wraithlight/wraithlight-mono/pull/514 is merged
            this._processor((item as any)!.data, (item as any)!.id);
        }, this._processorTimeout);
    }

}
