import { LoginScope } from "@wraithlight/core.auth-common";

export const DEFAULT_LOGIN_SCOPES = [
    LoginScope.Forum,
    LoginScope.GameApplication,
    LoginScope.GameWebsite,
    LoginScope.Website
];

export const ACCOUNT_ERRORS = {
    passwordMismatch: "error.account.password-mismatch",
    usernameAlreadyTaken: "error.account.username-already-taken",
    emailAddressAlreadyUsed: "error.account.email-already-in-use"
};
