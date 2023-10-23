import {
    LOWERCASE_ALPHABET,
    UPPERCASE_ALPHABET,
    NUMBER_ALPHABET
} from "@wraithlight/core.random-string";

export const SALT_LENGTH = 10;
export const SALT_ALPHABET: ReadonlyArray<string> = [
    LOWERCASE_ALPHABET,
    UPPERCASE_ALPHABET,
    NUMBER_ALPHABET
];
