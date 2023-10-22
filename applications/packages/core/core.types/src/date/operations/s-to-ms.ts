const AMPLIFIER = 1000;

/**
 * @deprecated Import it from `core.date` instead.
 */
export function secondsToMilliseconds(seconds: number): number {
    return seconds * AMPLIFIER;
}
