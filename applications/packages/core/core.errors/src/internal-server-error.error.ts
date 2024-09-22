import { WraithlightError } from "./_wraithlight.error";

export class InternalServerError extends WraithlightError {
    constructor() {
        super(
            "InternalServerError",
            "E_INTERNALSERVERERROR"
        );
    }
}
