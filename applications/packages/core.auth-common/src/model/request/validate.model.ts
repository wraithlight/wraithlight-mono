import { LoginScope } from "../../constant";

export interface ValidateRequest {
    sessionToken: string;
    scope: LoginScope;
}
