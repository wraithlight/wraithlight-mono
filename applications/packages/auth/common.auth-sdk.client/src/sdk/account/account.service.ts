import { RegisterResponse } from "../../model";
import { ClientAccountService } from "../../service";

import { RegisterModel } from "./model";

export class AccountService {

    private readonly _accountService: ClientAccountService;

    constructor(
        apiBaseUrl: string
    ) {
        this._accountService = new ClientAccountService(apiBaseUrl);
    }

    public async register(payload: RegisterModel): Promise<RegisterResponse> {
        return this._accountService.register(
            payload.username,
            payload.password,
            payload.passwordVerify,
            payload.emailAddress
        );
    }

}
