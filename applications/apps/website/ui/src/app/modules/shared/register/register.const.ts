/* eslint-disable @typescript-eslint/unbound-method */

import { Validators } from "@angular/forms";

export const CONTROL_NAMES = Object.freeze({
    username: "username",
    password: "password",
    passwordVerify: "passwordVerify",
    emailAddress: "emailAddress"
});

const PASSWORD_REGEX = "";
const PASSWORD_VALIDATORS = [
    Validators.required,
    Validators.pattern(PASSWORD_REGEX)
];

export const CONTROL_VALIDATORS = Object.freeze({
    [CONTROL_NAMES.emailAddress]: [
        Validators.email,
        Validators.required
    ],
    [CONTROL_NAMES.username]: [
        Validators.required
    ],
    [CONTROL_NAMES.password]: [
        ...PASSWORD_VALIDATORS
    ],
    [CONTROL_NAMES.passwordVerify]: [
        ...PASSWORD_VALIDATORS
    ],
});
