import { addSeconds } from "./add-seconds";
import { minutesToSeconds } from "./operations";

export function addMinutes(date: Date, minutes: number): Date {
  const s = minutesToSeconds(minutes);
  return addSeconds(
    date,
    s
  );
}
