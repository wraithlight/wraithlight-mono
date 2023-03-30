import { randomNumberBetween as _randomNumberBetween } from "../_internal";

/**
 * Generates a random number within the given interval.
 * Min and max values are inlcuded.
 * @param {number} min Minimum value.
 * @param {number} max Maximum value.
 * @returns {number} A random value betwwen min and max.
 */
export function randomNumberBetween(
    min: number = 0,
    max: number = 1
): number {
    return _randomNumberBetween(min, max);
}