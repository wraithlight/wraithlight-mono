import { SEC_IN_MINUTE } from "./get-minutes.const";
import { getSeconds } from "./get-seconds";

/**
 * @deprecated Import this from `@wraithlight/framework.date` instead.
 */
export function getMinutes(minutes: number): number {
    return minutes * getSeconds(SEC_IN_MINUTE);
}
