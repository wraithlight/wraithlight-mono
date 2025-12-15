export function addMilliseconds(date: Date, milliseconds: number): Date {
  const time = date.getTime();
  return new Date(time + milliseconds);
}
