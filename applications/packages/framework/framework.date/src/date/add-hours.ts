import { addMinutes } from "./add-minutes";
import { hoursToMinutes } from "./operations";

export function addHours(date: Date, hours: number): Date {
  const m = hoursToMinutes(hours);
  return addMinutes(
    date,
    m
  );
}
