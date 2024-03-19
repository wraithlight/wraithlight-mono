import { Bcrypt } from "@wraithlight/facade.bcrypt";

import { SALT_ROUNDS } from "./password.const";
import { PasswordEncryptionResult } from "./password.model";

export class PasswordService {

    public encryptPassword(
        password: string,
        salt: string
    ): PasswordEncryptionResult {
        return {
            encryptedPassword: this.encryptPasswordInternal(password, salt),
            salt: salt
        };
    }

    public getSalt(): string {
        return Bcrypt.generateHashSync(SALT_ROUNDS);
    }

    public verifyPassword(
        password: string,
        encryptedPassword: string
    ): boolean {
        return Bcrypt.verifyPasswordSync(password, encryptedPassword);
    }

    private encryptPasswordInternal(
        password: string,
        salt: string
    ): string {
        return Bcrypt.encryptPasswordWithSaltSync(password, salt);
    }

}
