const AMPLIFIER = 1000;

export function secondsToMilliseconds(seconds: number): number {
  return seconds * AMPLIFIER;
}
