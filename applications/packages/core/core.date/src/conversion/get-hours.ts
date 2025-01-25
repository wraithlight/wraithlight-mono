import { MINUTE_IN_HOUR } from "./get-hours.const";
import { getMinutes } from "./get-minutes";

/**
 * @deprecated Import this from `@wraithlight/framework.date` instead.
 */
export function getHours(hours: number): number {
    return hours * getMinutes(MINUTE_IN_HOUR);
}
