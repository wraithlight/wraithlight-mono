const AMPLIFIER = 1000;

/**
 * @deprecated Import this from `@wraithlight/framework.date` instead.
 */
export function secondsToMilliseconds(seconds: number): number {
    return seconds * AMPLIFIER;
}
