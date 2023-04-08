import { LoginScope } from "../../constant";

export interface KeepAliveRequest {
    sessionToken: string;
    scope: LoginScope;
}
