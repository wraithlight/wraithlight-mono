import { LoginScope } from "../../enum";

export interface ApiLoginRequest {
    username: string;
    password: string;
    loginScope: LoginScope;
}
