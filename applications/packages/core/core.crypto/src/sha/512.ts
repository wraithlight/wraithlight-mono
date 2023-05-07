import { SHA512 as cryptoSHA512 } from "crypto-js";

export function SHA512(str: string): string {
    return cryptoSHA512(str).toString();
}
