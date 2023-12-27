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

    public async login(username: string, password: string): Promise<LoginResponse> {
        return this._authService.login(username, password);
    }

    public async logout(sessionToken: string): Promise<LogoutResponse> {
        return this._authService.logout(sessionToken);
    }

    public async keepAlive(sessionToken: string): Promise<KeepAliveSessionResponse> {
        return this._authService.keepAliveSession(sessionToken);
    }

}
