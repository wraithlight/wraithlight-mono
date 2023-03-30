import { randomNumberBetween } from "../_internal";

/**
 * Generates a random boolean.
 * @returns {boolean} A random boolean.
 */
export function randomBoolean(): boolean {
    return randomNumberBetween() === 1;
}
