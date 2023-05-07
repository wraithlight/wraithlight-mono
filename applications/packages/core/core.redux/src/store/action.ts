export interface Action {
    type: string;
}

export interface ActionWithPayload<TPayload> extends Action {
    payload: TPayload;
}

export type MixedAction<TPayload> = Action | ActionWithPayload<TPayload>;
