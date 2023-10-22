const AMPLIFIER = 60;

/**
 * @deprecated Import it from `core.date` instead.
 */
export function hoursToMinutes(hours: number): number {
    return hours * AMPLIFIER;
}
