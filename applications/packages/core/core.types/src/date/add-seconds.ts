import { addMilliseconds } from "./add-milliseconds";
import { secondsToMilliseconds } from "./operations";

/**
 * @deprecated Import it from `core.date` instead.
 */
export function addSeconds(date: Date, seconds: number): Date {
    const ms = secondsToMilliseconds(seconds);
    return addMilliseconds(date, ms);
}
