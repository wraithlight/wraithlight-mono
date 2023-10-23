import { Session } from "./_shared/session.model";

export interface BaseValidateResponse {
    success: boolean;
}

export interface ValidateSuccessResponse extends BaseValidateResponse {
    session: Session;
}
