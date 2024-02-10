import { RegisterResponse } from "../../model";
import { ClientAccountService } from "../../service";

import { RegisterModel } from "./model";

export class AccountService {

    private readonly _accountService = new ClientAccountService(this._apiBaseUrl);

    constructor(
        private readonly _apiBaseUrl: string
    ) { }

    public async register(payload: RegisterModel): Promise<RegisterResponse> {
        return this._accountService.register(
            payload.username,
            payload.password,
            payload.passwordVerify,
            payload.emailAddress
        );
    }

}
