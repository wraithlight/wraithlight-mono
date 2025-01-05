import { addDays } from "./add-days";
import { weeksToDays } from "./operations";

/**
 * @deprecated Import this from `@wraithlight/framework.date` instead.
 */
export function addWeeks(date: Date, weeks: number): Date {
    const d = weeksToDays(weeks);
    return addDays(
        date,
        d
    );
}
