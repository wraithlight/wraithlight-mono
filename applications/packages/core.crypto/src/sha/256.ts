import { SHA256 as cryptopSHA256 } from "crypto-js";

export function SHA256(str: string): string {
    return cryptopSHA256(str).toString();
}
