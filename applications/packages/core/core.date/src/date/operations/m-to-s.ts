const AMPLIFIER = 60;

/**
 * @deprecated Import this from `@wraithlight/framework.date` instead.
 */
export function minutesToSeconds(minutes: number): number {
    return minutes * AMPLIFIER;
}
