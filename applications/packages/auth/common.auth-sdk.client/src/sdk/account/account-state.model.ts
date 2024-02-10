import { RegisterModel } from "./model";

interface AccountUserRegisterState extends RegisterModel { }

export interface AccountState {
    isBusy: boolean;
    userRegister?: AccountUserRegisterState;
    errors?: Array<string>;
}
