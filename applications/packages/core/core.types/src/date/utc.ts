/**
 * @deprecated Import it from `core.date` instead.
 */
export function toUtc(date: Date): Date {
    return new Date(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDay(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds(),
        date.getUTCMilliseconds()
    );
}

/**
 * @deprecated Import it from `core.date` instead.
 */
export function utcNow(): Date {
    return toUtc(new Date());
}
