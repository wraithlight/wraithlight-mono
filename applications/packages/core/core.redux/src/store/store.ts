import { Counter } from "@wraithlight/core.counter";
import { Nullable, isNil } from "@wraithlight/core.nullable";
import { predicateOverride, Predicate } from "@wraithlight/core.linq";

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
        // eslint-disable-next-line @typescript-eslint/parameter-properties
        private _state: TState
    ) { }

    public static initialize<TState>(initialState: TState): void {
        this._instance = new Store(initialState);
    }

    public static initializePartial<TState, TSubState>(
        predicate: Predicate<TState, TSubState>,
        substate: TSubState,
        forceOverride: boolean = false
    ): void {
        if (!this._instance) {
            throw "The store is not initialized!";
        }
        if (!forceOverride) {
            const substateStore: Nullable<TSubState> = predicate(this._instance._state);
            if (!isNil(substateStore)) {
                throw "The substate has been already initialized!";
            }
        }
        this._instance._state = predicateOverride(this._instance._state, substate, predicate);
    }

    public static getInstance<TState>(): Store<TState> {
        if (!this._instance) {
            throw "The store is not initialized!";
        }
        return this._instance as Store<TState>;
    }

    public dispatch<TActionPayload>(...actions: Array<MixedAction<TActionPayload>>): void {
        for (const action of actions) {
            const reducers = this._reducers.filter(m => m.on.includes(action.type));
            reducers.forEach(m => { this._state = m.callback(this._state, action) });
            const effects = this._effects.filter(m => m.on.includes(action.type));
            effects.forEach(m => m.callback(action));
            this.invokeSelectors();
        }
    }

    public select<TValue>(selector: Selector<TState, TValue>): SelectorResult<TValue> {
        const id = `selector_${this._selectorCounter.getNext()}`;
        const stopFn = (): void => {
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
    ): Store<TState> {
        const effect = createEffect(actions, effectCallback);
        this._effects.push(effect);
        return this;
    }

    private invokeSelectors(): void {
        this._selectors.forEach(m => m.invoke(this._state));
    }

}
