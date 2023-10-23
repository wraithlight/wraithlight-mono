import { Session } from "./_shared/session.model";

export interface BaseLoginResponse {
    success: boolean;
}

export interface LoginErrorResponse extends BaseLoginResponse {
    errors: Array<string>;
}

export interface LoginSuccessResponse extends BaseLoginResponse {
    session: Session;
}
