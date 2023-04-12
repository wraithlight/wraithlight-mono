export const AUTH_ERRORS = Object.freeze({
    userNotFound: "error.auth.user-not-found",
    scopeNotFound: "error.auth.scope-not-found",
    userScopeNotFound: "error.auth.user-scope-not-found",
    invalidPassword: "error.auth.invalid-password",
    userBlockDueTooManyInvalidAttempts: "error.auth.too-many-invalid-attempts",
    needsEmailVerify: "error.auth.email-verify"
});

export const MAXIMUM_FAILED_LOGIN_ATTEMPTS = 5;
