import {
    generateRandomString,
} from "@wraithlight/core.types";
import {
    LOWERCASE_ALPHABET,
    NUMBER_ALPHABET,
    UPPERCASE_ALPHABET
} from "@wraithlight/core.random-string";
import { SHA512 } from "@wraithlight/core.crypto";

import { PASSWORD_SALT_LENGTH } from "./password.const";

export class PasswordService {

    public generateSalt(): string {
        return generateRandomString(
            PASSWORD_SALT_LENGTH,
            [LOWERCASE_ALPHABET, UPPERCASE_ALPHABET, NUMBER_ALPHABET]
        );
    }

    public saltPassword(password: string, salt: string): string {
        const left = salt;
        const right = salt
            .split("")
            .reverse()
            .join("")
        ;
        return `${left}${password}${right}`;
    }

    public hashPassword(password: string): string {
        return SHA512(password);
    }

    public verifyPassword(left: string, right: string): boolean {
        return left === right;
    }

}
