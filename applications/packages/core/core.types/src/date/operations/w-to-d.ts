const AMPLIFIER = 7;

/**
 * @deprecated Import it from `core.date` instead.
 */
export function weeksToDays(weeks: number): number {
    return weeks * AMPLIFIER;
}
