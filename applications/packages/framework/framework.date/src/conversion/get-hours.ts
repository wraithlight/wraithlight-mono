import { MINUTE_IN_HOUR } from "./get-hours.const";
import { getMinutes } from "./get-minutes";

export function getHours(hours: number): number {
  return hours * getMinutes(MINUTE_IN_HOUR);
}
