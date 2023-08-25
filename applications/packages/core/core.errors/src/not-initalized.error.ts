import { WraithlightError } from "./_wraithlight.error";

export class NotInitializedError extends WraithlightError {
    constructor(
        objectName: string
    ) {
        super("NotInitializedError", `Object: '${objectName}'`);
    }
}
