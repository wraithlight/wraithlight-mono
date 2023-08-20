import { LifoStackService } from "@wraithlight/core.stack";
import { Guid, isNil, newGuid } from "@wraithlight/core.types";

import { CQRS_PROCESSOR_TIMEOUT } from "./cqrs.const";
import { CqrsContentModel, CqrsProcessor } from "./cqrs.model";

export class CqrsService<T> {

    private _isRunning = false;
    private readonly _lifoService = new LifoStackService<CqrsContentModel<T>>();

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
        this._lifoService.set(stackItem);
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
        this._lifoService.clear();
    }

    private processor(): void {
        setInterval(() => {
            if (!this._isRunning) {
                return;
            }
            const item = this._lifoService.tryGetNext();
            if (!isNil(item)) {
                return;
            }
            this._processor(item!.data, item!.id);
        }, this._processorTimeout);
    }

}
