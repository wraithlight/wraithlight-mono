import { WraithlightError } from "./_wraithlight.error";

export class AlreadyInitializedError extends WraithlightError {
    constructor(
        objectName: string
    ) {
        super(
            "AlreadyInitializedError",
            `Object: '${objectName}'`
        );
    }
}
