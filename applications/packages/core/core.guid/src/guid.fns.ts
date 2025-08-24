import {
  HEX_MAX_VALUE,
  HEX_PRECISION,
  SEGMENT_1_LENGTH,
  SEGMENT_2_LENGTH,
  SEGMENT_5_LENGTH,
  VARIANT_LENGTH,
  VERSION_LENGTH,
  VERSION_MAX_NUMBER
} from "./guid.const";
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
  // eslint-disable-next-line max-len
  const hex = (length: number): string => Array.from({ length }, () => Math.floor(Math.random() * HEX_MAX_VALUE).toString(HEX_PRECISION)).join("");
  // eslint-disable-next-line max-len
  const randomIn = (length: number): number => Math.floor(Math.random() * length);

  // eslint-disable-next-line max-len
  const version = (Math.floor(Math.random() * VERSION_MAX_NUMBER) + 1).toString() + hex(VERSION_LENGTH);

  const variantChars = "aAbB89";
  // eslint-disable-next-line max-len
  const variant = variantChars[randomIn(variantChars.length)] + hex(VARIANT_LENGTH);

  return `${hex(SEGMENT_1_LENGTH)}-${hex(SEGMENT_2_LENGTH)}-${version}-${variant}-${hex(SEGMENT_5_LENGTH)}`;
}
