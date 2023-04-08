import { LoginScope } from "../../constant";

export interface LogoutRequest {
    sessionToken: string;
    scope: LoginScope;
}
