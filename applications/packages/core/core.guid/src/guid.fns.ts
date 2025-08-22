import { Guid } from "./guid.type";

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
  const hex = (length: number) =>
    Array.from({ length }, () => Math.floor(Math.random() * 16).toString(16)).join('');
  const version = (Math.floor(Math.random() * 9) + 1).toString() + hex(3);

  const variantChars = 'aAbB89';
  const variant = variantChars[Math.floor(Math.random() * variantChars.length)] + hex(3);

  return `${hex(8)}-${hex(4)}-${version}-${variant}-${hex(12)}`;
}
