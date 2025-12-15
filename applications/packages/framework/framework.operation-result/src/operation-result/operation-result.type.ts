export abstract class OperationResultBase {
  public abstract isSuccess: boolean;
  public abstract isError: boolean;

  public isErrorTC(): this is OperationResultError {
    return this.isError;
  }

  public isSuccessTC<T>(): this is OperationResultSuccess<T> {
    return this.isSuccess;
  }
}

export class OperationResultSuccess<T = undefined>
  extends OperationResultBase {
  public readonly isError = false;
  public readonly isSuccess = true;
  public readonly payload: T;

  constructor(
    _payload: T
  ) {
    super();
    this.payload = _payload;
  }
}

export class OperationResultError extends OperationResultBase {
  public readonly isError = true;
  public readonly isSuccess = false;
  public readonly errors: ReadonlyArray<string>;


  constructor(
    ..._errors: ReadonlyArray<string>
  ) {
    super();
    this.errors = _errors;
  }
}

export type OperationResult<T> =
  OperationResultSuccess<T>
  | OperationResultError;

export type AsyncOperationResult<T> = Promise<OperationResult<T>>;
