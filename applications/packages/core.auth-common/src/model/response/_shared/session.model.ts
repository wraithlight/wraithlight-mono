import { LoginScope } from "../../../constant";

export interface Session {
    token: string;
    scope: LoginScope;
    validToUtc: Date;
    validFromUtc: Date;
}
