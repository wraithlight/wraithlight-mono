import { randomNumberBetween } from "../_internal";

/**
 * Generates a random boolean.
 * @returns {boolean} A random boolean.
 * @deprecated Use `randomBoolean` from `@wraithlight/core.random-boolean` instead.
 */
export function randomBoolean(): boolean {
    return randomNumberBetween() === 1;
}
