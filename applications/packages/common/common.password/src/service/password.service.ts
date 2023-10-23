import { generateRandomString } from "@wraithlight/core.random-string";
import { SHA512 } from "@wraithlight/core.crypto";

import { SALT_ALPHABET, SALT_LENGTH } from "./password.const";
import { PasswordEncryptionResult } from "./password.model";

export class PasswordService {

    public encryptPassword(password: string): PasswordEncryptionResult {
        const salt = this.getSalt();
        return {
            encryptedPassword: this.encryptPasswordInternal(password, salt),
            salt: salt
        }
    }

    public verifyPassword(
        password: string,
        salt: string,
        encryptedPassword: string
    ): boolean {
        const hashedPassword = this.encryptPasswordInternal(password, salt);
        return encryptedPassword === hashedPassword;
    }

    private encryptPasswordInternal(
        password: string,
        salt: string
    ): string {
        return this.hashPassword(
            this.salt(
                this.hashPassword(
                    this.salt(password, salt)
                ),
                salt
            )
        );
    }

    private hashPassword(password: string): string {
        return SHA512(password);
    }

    private salt(
        password: string,
        salt: string
    ): string {
        return `${salt}${password}${salt}`;
    }

    private getSalt(): string {
        return generateRandomString(
            SALT_LENGTH,
            // TODO: Align the SDK.
            SALT_ALPHABET as Array<string>
        );
    }

}
