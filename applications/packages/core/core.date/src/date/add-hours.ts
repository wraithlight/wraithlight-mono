import { addMinutes } from "./add-minutes";
import { hoursToMinutes } from "./operations";

/**
 * @deprecated Import this from `@wraithlight/framework.date` instead.
 */
export function addHours(date: Date, hours: number): Date {
    const m = hoursToMinutes(hours);
    return addMinutes(
        date,
        m
    );
}
