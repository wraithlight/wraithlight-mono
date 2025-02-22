const AMPLIFIER = 60;

/**
 * @deprecated Import this from `@wraithlight/framework.date` instead.
 */
export function hoursToMinutes(hours: number): number {
    return hours * AMPLIFIER;
}
