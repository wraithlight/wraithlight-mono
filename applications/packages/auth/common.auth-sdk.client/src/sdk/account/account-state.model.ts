import { RegisterModel } from "./model/register.model";

interface AccountUserRegisterState extends RegisterModel { }

export interface AccountState {
    isBusy: boolean;
    userRegister?: AccountUserRegisterState;
    errors?: Array<string>;
}
