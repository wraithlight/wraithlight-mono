import { createHash } from "crypto";

import { DIGEST_HEX } from "./create-hash.const";
import { CreateHashAlgorithm } from "./create-hash.model";

export function hash(
  algorithm: CreateHashAlgorithm,
  token: string
): string {
  return createHash(algorithm).update(token).digest(DIGEST_HEX);
}
