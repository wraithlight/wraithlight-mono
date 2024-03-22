import { Nullable } from "@wraithlight/core.nullable";

import { Selector } from "./selector";

type SelectorResultParams<TValue> = (
    value: TValue,
    stop: SelectorResultStopFn
) => void;

export type SelectorResultStopFn = () => void;

export class SelectorResult<TValue> {

    protected params: Nullable<SelectorResultParams<TValue>>;

    public onSelection(params: SelectorResultParams<TValue>): void {
        this.params = params;
    }
}

export class SelectorResultWrapper<TState, TValue>
    extends SelectorResult<TValue> {

    private firstRun = true;
    private previousValue: Nullable<TValue>;

    constructor(
        private readonly _id: string,
        private readonly _stopFn: () => void,
        private readonly _selector: Selector<TState, TValue>
    ) {
        super();
    }

    public get id(): string {
        return this._id;
    }

    public invoke(
        state: TState
    ): void {
        if (!this.params) {
            return;
        }
        const currentValue = this._selector(state);
        if(this.firstRun) {
            this.params(this._selector(state), this._stopFn);
            this.firstRun = false;
        } else if(currentValue !== this.previousValue) {
            this.params(this._selector(state), this._stopFn);
            this.previousValue = currentValue;
        }
    }

}
