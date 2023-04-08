import { LoginScope } from "../../constant";

export interface LoginRequest {
    username: string;
    password: string;
    keepLoggedIn?: boolean;
    scope: LoginScope;
}
