import { addSeconds } from "./add-seconds";
import { minutesToSeconds } from "./operations";

/**
 * @deprecated Import this from `@wraithlight/framework.date` instead.
 */
export function addMinutes(date: Date, minutes: number): Date {
    const s = minutesToSeconds(minutes);
    return addSeconds(
        date,
        s
    );
}
