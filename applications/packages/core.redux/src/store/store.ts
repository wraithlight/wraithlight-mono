import { Counter, Nullable } from "@wraithlight/core.types";

import { Action, MixedAction } from "./action";
import {
    Effect,
    EffectCallback,
    createEffect } from "./effect";
import {
    Reducer,
    ReducerCallback,
    createReducer
} from "./reducer";
import { Selector } from "./selector/selector";
import { SelectorResult, SelectorResultWrapper } from "./selector/selector-result";
import { COUNTER_NAME } from "./store.const";

export class Store<TState> {

    private _selectors: Array<SelectorResultWrapper<TState, any>> = [];

    private readonly _selectorCounter = Counter.getInstance(COUNTER_NAME);
    private readonly _effects: Array<Effect<any>> = [];
    private readonly _reducers: Array<Reducer<TState, any>> = [];

    private static _instance: Nullable<Store<any>>;

    private constructor(
        private _state: TState
    ) { }

    public static initialize<TState>(initialState: TState): void {
        this._instance = new Store(initialState);
    }

    public static getInstance<TState>(): Store<TState> {
        if (!this._instance) {
            throw "The store is not initialized!";
        }
        return this._instance as Store<TState>;
    }

    public dispatch<TActionPayload>(action: MixedAction<TActionPayload>): void {
        const reducers = this._reducers.filter(m => m.on.includes(action.type));
        reducers.forEach(m => { this._state = m.callback(this._state, action) });
        const effects = this._effects.filter(m => m.on.includes(action.type));
        effects.forEach(m => m.callback(action));
        this.invokeSelectors();
    }

    public select<TValue>(selector: Selector<TState, TValue>): SelectorResult<TValue> {
        const id = `selector_${this._selectorCounter.getNext()}`;
        const stopFn = () => {
            const index = this._selectors.findIndex(m => m.id === id);
            this._selectors.splice(index, 1);
        };
        const wrapper = new SelectorResultWrapper(id, stopFn, selector);
        this._selectors.push(wrapper);
        return wrapper;
    }

    public addReducer<TAction extends Action>(
        actions: Array<(...args: Array<any>) => TAction>,
        reducerCallback: ReducerCallback<TState, TAction>
    ): Store<TState> {
        const reducer = createReducer(actions, reducerCallback);
        this._reducers.push(reducer);
        return this;
    }

    public addEffect<TAction extends Action>(
        actions: Array<(...args: Array<any>) => TAction>,
        effectCallback: EffectCallback<TAction>
    ) {
        const effect = createEffect(actions, effectCallback);
        this._effects.push(effect);
        return this;
    }

    private invokeSelectors(): void {
        this._selectors.forEach(m => m.invoke(this._state));
    }

}
