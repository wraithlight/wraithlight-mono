export interface AccountUserRegisterState {
    username: string;
    password: string;
    passwordVerify: string;
    emailAddress: string;
}

export interface AccountState {
    isBusy: boolean;
    userRegister?: AccountUserRegisterState;
    errors?: Array<string>;
}
