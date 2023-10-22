import { addDays } from "./add-days";
import { weeksToDays } from "./operations";

/**
 * @deprecated Import it from `core.date` instead.
 */
export function addWeeks(date: Date, weeks: number): Date {
    const d = weeksToDays(weeks);
    return addDays(date, d);
}
