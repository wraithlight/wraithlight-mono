import { LoginScope } from "../../enum";

export interface ApiKeepAliveSessionRequest {
    sessionToken: string;
    loginScope: LoginScope;
}
