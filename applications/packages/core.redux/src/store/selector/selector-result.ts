import { Nullable } from "@wraithlight/core.types";

import { Selector } from "./selector";

export type SelectorResultStopFn = () => void;
export type SelectorResultParams<TValue> = (value: TValue, stop: SelectorResultStopFn) => void;

export class SelectorResult<TValue> {

    protected params: Nullable<SelectorResultParams<TValue>>;

    public onSelection(params: SelectorResultParams<TValue>) {
        this.params = params;
    }

}

export class SelectorResultWrapper<TState, TValue> extends SelectorResult<TValue> {

    constructor(
        public readonly id: string,
        private readonly _stopFn: () => void,
        private readonly _selector: Selector<TState, TValue>
    ) {
        super();
    }

    public invoke(
        state: TState
    ): void {
        this.params(this._selector(state), this._stopFn);
    }

}
