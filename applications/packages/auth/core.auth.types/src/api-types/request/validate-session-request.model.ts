import { LoginScope } from "../../enum";

export interface ApiValidateSessionRequest {
    sessionToken: string;
    loginScope: LoginScope;
}
