import { createHash } from "crypto";

import { CreateHashAlgorithm } from "./create-hash.model";
import { DIGEST_HEX } from "./create-hash.const";

export function hash(
    algorithm: CreateHashAlgorithm,
    token: string
): string {
    return createHash(algorithm).update(token).digest(DIGEST_HEX);
}
