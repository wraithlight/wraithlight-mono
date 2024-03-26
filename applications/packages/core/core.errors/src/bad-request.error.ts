import { WraithlightError } from "./_wraithlight.error";

export class BadRequestError extends WraithlightError {
    constructor() {
        super(
            "BadRequestError",
            "E_BADREQUEST"
        );
    }
}
