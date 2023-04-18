import { LoginScope } from "../../enum";

export interface ApiLogoutRequest {
    sessionToken: string;
    loginScope: LoginScope;
}
