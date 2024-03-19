import {
    compareSync,
    genSaltSync,
    hashSync
} from "bcryptjs";

import { DEFAULT_SALT_ROUNDS } from "./bcrypt.const";

export namespace Bcrypt {

    export function generateHashSync(
        rounds: number = DEFAULT_SALT_ROUNDS
    ): string {
        return genSaltSync(rounds);
    }

    export function encryptPasswordWithSaltSync(
        password: string,
        salt: string
    ): string {
        return hashSync(password, salt);
    }

    export function verifyPasswordSync(
        plainPassword: string,
        encryptedPassword: string
    ): boolean {
        return compareSync(
            plainPassword,
            encryptedPassword
        );
    }

}
