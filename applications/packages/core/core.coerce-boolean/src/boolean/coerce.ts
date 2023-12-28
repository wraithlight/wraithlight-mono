/**
 * Coerces any value to its boolean representation.
 * @param {unknown} booleanLike An unknown value to convert to its boolean value.
 * @returns {boolean} The boolean value.
 */
export function coerceBoolean(booleanLike: unknown): boolean {
    return !!booleanLike;
}
