import { UserStatus } from "@wraithlight/core.user-management.types";
import { LOWERCASE_ALPHABET, NUMBER_ALPHABET } from "@wraithlight/core.random-string";

export const DEFAULT_STATUS = UserStatus.EmailVerify;

const ANONYMIZED_ALPHABET: ReadonlyArray<string> = [
    ...LOWERCASE_ALPHABET.split(""),
    ...NUMBER_ALPHABET.split("")
];

export const ANONYMIZED_EMAIL_ALPHABET = ANONYMIZED_ALPHABET;
export const ANONYMIZED_USERNAME_ALPHABET = ANONYMIZED_ALPHABET;
export const ANONYMIZED_PASSWORD_ALPHABET = ANONYMIZED_ALPHABET;

export const ANONYMIZED_EMAIL_LENGTH = 16;
export const ANONYMIZED_USERNAME_LENGTH = 12;
export const ANONYMIZED_PASSWORD_LENGTH = 36;