import { addMilliseconds } from "./add-milliseconds";
import { secondsToMilliseconds } from "./operations";

/**
 * @deprecated Import this from `@wraithlight/framework.date` instead.
 */
export function addSeconds(date: Date, seconds: number): Date {
    const ms = secondsToMilliseconds(seconds);
    return addMilliseconds(
        date,
        ms
    );
}
