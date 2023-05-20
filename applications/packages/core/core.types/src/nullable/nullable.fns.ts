/**
 * Checks if the given value is `null` or `undefined`.
 * @param {unknown} valueLike The value to check.
 * @returns {boolean} True if the object is `null` or `undefined` otherwise false.
 */
export function isNil<T>(valueLike: unknown): valueLike is T {
    if (valueLike === null) {
        return true;
    }
    if (valueLike === undefined) {
        return true;
    }
    return false;
}
