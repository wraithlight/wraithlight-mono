import { addHours } from "./add-hours";
import { daysToHours } from "./operations";

/**
 * @deprecated Import this from `@wraithlight/framework.date` instead.
 */
export function addDays(date: Date, days: number): Date {
    const h = daysToHours(days);
    return addHours(
        date,
        h
    );
}
