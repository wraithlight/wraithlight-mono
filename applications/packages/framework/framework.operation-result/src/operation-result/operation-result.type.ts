export interface OperationResultBase<T = undefined> {
    isSuccess: boolean
}

export interface OperationResultSuccess<T = undefined> extends OperationResultBase<T> {
    isSuccess: true;
    payload: T;
}

export interface OperationResultError<T = undefined> extends OperationResultBase<T> {
    isSuccess: false;
    errors: ReadonlyArray<string>
}

export type OperationResult<T> = 
    OperationResultSuccess<T>
    | OperationResultError<T>
