import { addMinutes } from "./add-minutes";
import { hoursToMinutes } from "./operations";

/**
 * @deprecated Import it from `core.date` instead.
 */
export function addHours(date: Date, hours: number): Date {
    const m = hoursToMinutes(hours);
    return addMinutes(date, m);
}
