import { generateRandomString } from "@wraithlight/core.types";

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
    const pattern = "xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx".split("");
    const alphabets = {
        x: [
            ..."abcdef".split(""),
            ..."0123456789".split("")
        ],
        M: [
            ..."123456789".split("")
        ],
        N: [
            ..."89ab".split("")
        ]
    }
    const result = pattern.map(m => {
        if (m === "-") return m;
        const key = m as keyof typeof alphabets;
        const alphabet = alphabets[key];
        return generateRandomString(1, alphabet);
    });
    return result.join("");
}
