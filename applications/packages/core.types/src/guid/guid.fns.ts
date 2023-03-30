import { Guid } from "./guid.type";

/**
 * Verifies if the given object is `Guid`.
 * @param {string} guidLike The object to verify.
 */
export function isGuid(guidLike: string): guidLike is Guid {
    const regexStr = "^([a-fA-F0-9]{8}-([a-fA-F0-9]{4}-){3}[a-fA-F0-9]{12})$";
    const regex = new RegExp(regexStr);
    return regex.test(guidLike);
}

/**
 * Generates a new UUIDv4 Guid.
 * @returns {Guid} The new GUID.
 */
export function newGuid(): Guid {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
