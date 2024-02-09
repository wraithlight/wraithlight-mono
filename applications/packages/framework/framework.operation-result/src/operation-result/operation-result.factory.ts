import { OperationResultError, OperationResultSuccess } from "./operation-result.type";

export class OperationResultFactory {

    public static success<T = undefined>(
        payload: T
    ): OperationResultSuccess<T> {
        return {
            isSuccess: true,
            payload: payload
        }
    }

    public static error<T = undefined>(
        ...errors: ReadonlyArray<string>
    ): OperationResultError<T> {
        return {
            isSuccess: false,
            errors: errors
        }
    }

}
