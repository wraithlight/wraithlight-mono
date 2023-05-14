import { RegisterModel } from "./model/register.model";

export interface AccountUserRegisterState extends RegisterModel { }

export interface AccountState {
    isBusy: boolean;
    userRegister?: AccountUserRegisterState;
    errors?: Array<string>;
}
