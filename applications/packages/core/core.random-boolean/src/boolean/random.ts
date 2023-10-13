import { randomNumberBetween } from "@wraithlight/core.random-number";

/**
 * Generates a random boolean.
 * @returns {boolean} A random boolean.
 */
export function randomBoolean(): boolean {
    return randomNumberBetween() === 1;
}
