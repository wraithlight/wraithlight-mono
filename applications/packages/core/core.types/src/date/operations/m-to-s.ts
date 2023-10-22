const AMPLIFIER = 60;

/**
 * @deprecated Import it from `core.date` instead.
 */
export function minutesToSeconds(minutes: number): number {
    return minutes * AMPLIFIER;
}
