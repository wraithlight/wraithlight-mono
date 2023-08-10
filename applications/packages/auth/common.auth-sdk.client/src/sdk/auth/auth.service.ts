import {
    KeepAliveSessionResponse,
    LoginResponse,
    LogoutResponse
} from "../../model";
import {
    ClientAuthService
} from "../../service";

export class AuthService {

    private readonly _authService = new ClientAuthService(this._apiBaseUrl);

    constructor(
        private readonly _apiBaseUrl: string
    ) { }

    public login(username: string, password: string): Promise<LoginResponse> {
        return this._authService.login(username, password);
    }

    public logout(sessionToken: string): Promise<LogoutResponse> {
        return this._authService.logout(sessionToken);
    }

    public keepAlive(sessionToken: string): Promise<KeepAliveSessionResponse> {
        return this._authService.keepAliveSession(sessionToken);
    }

}
