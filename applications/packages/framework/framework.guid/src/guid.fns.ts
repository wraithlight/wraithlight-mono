import { randomUUID } from "crypto";

import { Guid } from "./guid.type";

Object.defineProperty(globalThis, "crypto", {
  value: {
    randomUUID: () => randomUUID()
  }
});

/**
 * Verifies if the given object is `Guid`.
 * @param {string} guidLike The object to verify.
 */
export function isGuid(guidLike: string): guidLike is Guid {
  const regexStr = "^([a-fA-F0-9]{8}-[a-fA-F0-9]{4}-([1-9][a-fA-F0-9]{3})-([a-bA-B8-9][a-fA-F0-9]{3})-[a-fA-F0-9]{12})$";
  const regex = new RegExp(regexStr);
  return regex.test(guidLike);
}

/**
 * Generates a new UUIDv4 Guid.
 * @returns {Guid} The new GUID.
 */
export function newGuid(): Guid {
  return crypto.randomUUID();
}
