const AMPLIFIER = 60;

export function minutesToSeconds(minutes: number): number {
  return minutes * AMPLIFIER;
}
